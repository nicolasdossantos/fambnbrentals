import React, { useState, useReducer, useRef, useCallback, useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SignaturePad from 'react-signature-canvas';
import { Box, Button, Typography, Grid, Container, Paper, Divider, FormControlLabel, Checkbox } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CreateIcon from '@mui/icons-material/Create';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from 'dayjs';
import CarInput from './CarInput'; // Assume CarInput is in a separate file
import FormTextField from './FormTextField';
import '../../style/TowamensingForm.css';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  errors: {},
  cars: [{ plate: '', state: '' }],
};



const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'SET_ERROR':
      return {
        ...state,
        errors: { ...state.errors, [action.field]: action.value },
      };
    case 'ADD_CAR':
      return { ...state, cars: [...state.cars, { plate: '', state: '' }] };
    case 'UPDATE_CAR':
      const updatedCars = [...state.cars];
      updatedCars[action.index] = { ...updatedCars[action.index], [action.field]: action.value };
      return { ...state, cars: updatedCars };
    case 'REMOVE_CAR':
      return { ...state, cars: state.cars.filter((_, index) => index !== action.index) };
    default:
      return state;
  }
};

export default function TowamensingForm() {
  const { firstName, lastName, startDate: urlStartDate, endDate: urlEndDate } = useParams();

  // Parse URL dates if provided, otherwise null for date picker
  const [startDate, setStartDate] = useState(
    urlStartDate ? dayjs(urlStartDate) : null
  );
  const [endDate, setEndDate] = useState(
    urlEndDate ? dayjs(urlEndDate) : null
  );

  const [formState, dispatch] = useReducer(formReducer, {
    ...initialState,
    firstName: firstName || '',
    lastName: lastName || '',
  });

  const [showErrorMessage, setShowErrorMessage] = useState(false);


  const [errorMessage, setErrorMessage] = useState('');

  const [isSuccessfull, setIsSuccessfull] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [signatureData, setSignatureData] = useState('');
  const [rulesAgreed, setRulesAgreed] = useState(false);
  const sigCanvasRef = useRef({});

  // Check if form is complete enough to enable submit
  const isSubmitDisabled = useMemo(() => {
    const hasErrors = Object.values(formState.errors).some(error => error);
    return hasErrors || !rulesAgreed || !signatureData;
  }, [formState.errors, rulesAgreed, signatureData]);

  const handleFieldChange = useCallback((field) => (event) => {
    dispatch({ type: 'SET_FIELD', field, value: event.target.value });
  }, []);

  useEffect(() => {
    if (errorMessage.length > 0) {
      setShowErrorMessage(true);
      setTimeout(() => {
        setShowErrorMessage(false);
        setErrorMessage('');
      }, 3000);
    }
  }, [errorMessage]);

  const handleSetError = useCallback((field, hasError) => {
    dispatch({ type: 'SET_ERROR', field, value: hasError });
  }, []);

  const requiredIsEmpty = () => {
    if (formState.firstName == "") {
      setErrorMessage('Please enter your first name');
      return true
    } else if (formState.lastName == "") {
      setErrorMessage('Please enter your last name');
      return true
    } else if (formState.email == "") {
      setErrorMessage('Please enter your email address');
      return true
    } else if (formState.address == "") {
      setErrorMessage('Please enter your address');
      return true
    } else if (formState.city == "") {
      setErrorMessage('Please enter your city');
      return true
    } else if (formState.state == "") {
      setErrorMessage('Please enter your state');
      return true
    } else if (formState.zip == "") {
      setErrorMessage('Please enter your zip code');
      return true
    } else if (formState.phone == "") {
      setErrorMessage('Please enter your phone number');
      return true
    } else if (signatureData == "") {
      setErrorMessage('Please sign the form');
      return true
    } else if (!startDate) {
      setErrorMessage('Please select a check-in date');
      return true
    } else if (!endDate) {
      setErrorMessage('Please select a check-out date');
      return true
    }

    if (formState.cars.length == 0) {
      setErrorMessage('Please enter at least one car');
      return true
    } else if (formState.cars.length == 1 && formState.cars[0].plate == "") {
      setErrorMessage('Please enter at least one car');
      return true
    }



    return false
  }

  const handleCarChange = useCallback((index, field) => (value) => {
    dispatch({ type: 'UPDATE_CAR', index, field, value });
  }, []);

  const handleAddCar = () => dispatch({ type: 'ADD_CAR' });
  const handleRemoveCar = useCallback((index) => {
    dispatch({ type: 'REMOVE_CAR', index });
  }, []);

  const clearSignature = () => {
    sigCanvasRef.current.clear();
    setSignatureData('');
  };

  const onSignatureChange = () => {
    setSignatureData(sigCanvasRef.current.getTrimmedCanvas().toDataURL('image/png'));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitting Form State:", formState); // Debug log
    setIsLoading(true);

    const dataForm = {
      ownerName: "Nicolas dos Santos",
      lotNumber: "1352",
      houseNumber: "194",
      houseStreet: "Bishop Circle",
      cleaningCrewName: "Gena O\'Connor",
      cleaningCrewPhoneNumber: "570-926-0282",
      guestFirstName: formState.firstName,
      guestLastName: formState.lastName,
      guestEmail: formState.email,
      cleanerNameAndPhoneNumber: "Gena O\'Connor 570-926-0282",
      guestFullName: formState.firstName + ' ' + formState.lastName,
      guestAddress: formState.address,
      guestCity: formState.city,
      guestState: formState.state,
      guestZip: formState.zip,
      ownerPhoneNumber: "267-721-0098",
      guestPhoneNumber: formState.phone,
      guestSignature: signatureData,
      todaysDate: new Date().toLocaleDateString(), //check
      startDate: startDate ? startDate.format('M/D/YYYY') : '',
      endDate: endDate ? endDate.format('M/D/YYYY') : '',
      car1Plate: "",
      car1State: "",
      car2Plate: "",
      car2State: "",
      car3Plate: "",
      car3State: "",
      car4Plate: "",
      car4State: "",
      car5Plate: "",
      car5State: "",
      car6Plate: "",
      car6State: "",
      car7Plate: "",
      car7State: "",
      car8Plate: "",
      car8State: "",
    }

    if (requiredIsEmpty()) {
      setIsLoading(false);
      return
    }



    const populateCars = (dataForm, cars) => {
      cars.forEach((car, index) => {
        dataForm[`car${index + 1}Plate`] = car.plate;
        dataForm[`car${index + 1}State`] = car.state;
      });

      return dataForm;

    }

    const formDataWithCars = populateCars(dataForm, formState.cars);


    try {
      const response = await fetch('https://fambnbbackend.azurewebsites.net/api/ProcessForm?code=X8ZC7UFwAIHl16u5OoreMM8QT9AdDX0W7IyhVjMbuqOHAzFuwkUMnw==', {
        method: 'POST',
        body: JSON.stringify(formDataWithCars),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setIsSuccessfull(true);
    } catch (error) {
      console.error('Error during form submission:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const carsElements = useMemo(() => formState.cars.map((car, index) => (
    <CarInput
      key={index}
      car={car}
      index={index}
      isSuccessfull={isSuccessfull}
      onCarChange={handleCarChange}
      onRemoveCar={handleRemoveCar}
      showRemove={formState.cars.length > 1}
    />
  )), [formState.cars, isSuccessfull, handleCarChange, handleRemoveCar]);

  return (
    <Container maxWidth="md">
      {isSuccessfull && (
        <Alert style={{ position: 'sticky', top: '0' }} severity="success" variant="filled">
          <AlertTitle>Thank You!</AlertTitle>
          Your form has been submitted successfully.
        </Alert>
      )}
      {showErrorMessage && (
        <Alert style={{ position: 'sticky', top: '0' }} severity="error" variant="filled">
          <AlertTitle>{errorMessage}</AlertTitle>
        </Alert>
      )}
      <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off" sx={{ mt: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Personal Information</Typography>
        <Grid container spacing={2}>
          <FormTextField
            name="firstName"
            label="First Name"
            value={firstName}
            onChange={handleFieldChange('firstName')}
            disabled
            dispatchError={handleSetError}
            gridProps={{ xs: 12, sm: 6 }}
          />
          <FormTextField
            name="lastName"
            label="Last Name"
            value={formState.lastName}
            onChange={handleFieldChange('lastName')}
            dispatchError={handleSetError}
            disabled
            gridProps={{ xs: 12, sm: 6 }}
          />
          <FormTextField
            name="email"
            label="Email Address"
            value={formState.email}
            onChange={handleFieldChange('email')}
            dispatchError={handleSetError}
            disabled={isSuccessfull}
            gridProps={{ xs: 12 }}
          />
          <FormTextField
            name="address"
            label="Address"
            value={formState.address}
            dispatchError={handleSetError}
            onChange={handleFieldChange('address')}
            disabled={isSuccessfull}
            gridProps={{ xs: 12 }}
          />
          <FormTextField
            name="city"
            label="City"
            value={formState.city}
            onChange={handleFieldChange('city')}
            dispatchError={handleSetError}
            disabled={isSuccessfull}
            gridProps={{ xs: 12, sm: 6 }}
          />
          <FormTextField
            name="state"
            label="State (2 letter abbreviation)"
            value={formState.state}
            onChange={handleFieldChange('state')}
            dispatchError={handleSetError}
            disabled={isSuccessfull}
            gridProps={{ xs: 12, sm: 3 }}
          />
          <FormTextField
            name="zip"
            label="Zip"
            value={formState.zip}
            onChange={handleFieldChange('zip')}
            dispatchError={handleSetError}
            disabled={isSuccessfull}
            gridProps={{ xs: 12, sm: 3 }}
          />
          <FormTextField
            name="phoneNumber"
            label="Phone Number"
            value={formState.phone}
            onChange={handleFieldChange('phone')}
            dispatchError={handleSetError}
            disabled={isSuccessfull}
            gridProps={{ xs: 12 }}
          />
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h6" sx={{ mb: 2 }}>Reservation Dates</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <MobileDatePicker
                label="Check-in Date"
                value={startDate}
                onChange={(newValue) => setStartDate(newValue)}
                disabled={isSuccessfull || !!urlStartDate}
                closeOnSelect={true}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    required: true,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MobileDatePicker
                label="Check-out Date"
                value={endDate}
                onChange={(newValue) => setEndDate(newValue)}
                disabled={isSuccessfull || !!urlEndDate}
                minDate={startDate || undefined}
                closeOnSelect={true}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    required: true,
                  },
                }}
              />
            </Grid>
          </Grid>
        </LocalizationProvider>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h6" sx={{ mb: 2 }}>Car Information</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Please enter the license plate information for all vehicles that will be at the property.
        </Typography>
        {carsElements}
        <Button
          variant="outlined"
          startIcon={<AddCircleOutlineIcon />}
          onClick={handleAddCar}
          disabled={formState.cars.length >= 5 || isSuccessfull}
          sx={{ mb: 3 }}
        >
          Add Another Car
        </Button>

        <Divider sx={{ my: 3 }} />

        <Paper 
          elevation={0} 
          sx={{ 
            p: 3, 
            backgroundColor: 'rgb(229, 246, 253)', 
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'info.light'
          }}
        >
          <FormControlLabel
            control={
              <Checkbox 
                checked={rulesAgreed} 
                onChange={(e) => setRulesAgreed(e.target.checked)}
                disabled={isSuccessfull}
                color="primary"
              />
            }
            label={
              <Typography variant="body2">
                I have read the{' '}
                <a 
                  href="https://engage.goenumerate.com/s/towamensingtrails/public/7234/2026%20Rules%20of%20Conduct%20revised%202.pdf" 
                  target='_blank' 
                  rel="noopener noreferrer"
                  style={{ color: '#1976d2', fontWeight: 500 }}
                >
                  Towamensing Trails Rules of Conduct
                </a>
                {' '}and Rental Policy. I am aware of the trash compactor hours and checkout time requirements.
              </Typography>
            }
          />
        </Paper>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" sx={{ mb: 1 }}>Signature</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Please sign below using your finger or mouse
        </Typography>



        <Box sx={{ 
          border: '2px solid',
          borderColor: signatureData ? 'success.main' : 'grey.400',
          borderRadius: 2,
          backgroundColor: '#fafafa',
          p: 1,
          mb: 1
        }}>
          <SignaturePad
            ref={sigCanvasRef}
            canvasProps={{ className: 'signatureCanvas' }}
            onEnd={onSignatureChange}
            disabled={isSuccessfull}
          />
        </Box>
        {!signatureData && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <CreateIcon fontSize="small" color="action" />
            <Typography variant="caption" color="text.secondary">
              Sign in the box above
            </Typography>
          </Box>
        )}

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <Button 
            disabled={isSuccessfull || isLoading || !signatureData} 
            variant="outlined" 
            onClick={clearSignature}
            size="small"
          >
            Clear Signature
          </Button>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', pb: 4 }}>
          <Button 
            disabled={isLoading || isSuccessfull || isSubmitDisabled} 
            type="submit" 
            variant="contained" 
            size="large"
            sx={{ 
              mt: 3, 
              px: 6, 
              py: 1.5,
              fontSize: '1.1rem',
              backgroundColor: 'primary.main',
              '&:hover': {
                backgroundColor: 'primary.dark',
              }
            }}
          >
            {isLoading ? 'Submitting...' : 'Submit Registration'}

          </Button>
        </Box>
      </Box>
    </Container>
  );
}

// formatDate is no longer needed - using dayjs format() instead
