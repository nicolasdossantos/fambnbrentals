import React, { useState, useReducer, useRef, useCallback, useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SignaturePad from 'react-signature-canvas';
import { Box, TextField, Button, Typography, Grid, Container } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
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
  const { firstName, lastName, startDate, endDate } = useParams();

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
  const sigCanvasRef = useRef({});

  const isSubmitDisabled = useMemo(() => {
    return Object.values(formState.errors).some(error => error);
  }, [formState.errors]);

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
    if(formState.firstName == "") {
      setErrorMessage('Please enter your first name');
      return true
    } else if(formState.lastName == "") {
      setErrorMessage('Please enter your last name');
      return true
    } else if(formState.email == "") {
      setErrorMessage('Please enter your email address');  
      return true
    } else if(formState.address == "") {
      setErrorMessage('Please enter your address');
      return true
    } else if(formState.city == "") {
      setErrorMessage('Please enter your city');
      return true
    } else if(formState.state == "") {
      setErrorMessage('Please enter your state');
      return true
    } else if(formState.zip == "") {
      setErrorMessage('Please enter your zip code');
      return true
    } else if(formState.phone == "") {
      setErrorMessage('Please enter your phone number');
      return true
    } else if(signatureData == "") {
      setErrorMessage('Please sign the form');
      return true
    } 

    if(formState.cars.length == 0) {
      setErrorMessage('Please enter at least one car');
      return true
    } else if(formState.cars.length == 1 && formState.cars[0].plate == "") {
      setErrorMessage('Please enter at least one car');
      return true
    }

   

    return false
  }

  const handleCarChange = useCallback((index, field) => (value) => {
    dispatch({ type: 'UPDATE_CAR', index, field, value });
  }, []);

  const handleAddCar = () => dispatch({ type: 'ADD_CAR' });
  const handleRemoveCar = (index) => () => dispatch({ type: 'REMOVE_CAR', index });

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
      startDate: formatDate(startDate),
      endDate: formatDate(endDate),
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

    if(requiredIsEmpty() ) {
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
        <Typography variant="h6">Personal Information</Typography>
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


        <Typography variant="h6" sx={{ mt: 4 }}>Car Information</Typography>
        {carsElements}
        <Button
          variant="outlined"
          startIcon={<AddCircleOutlineIcon />}
          onClick={handleAddCar}
          disabled={formState.cars.length >= 5 || isSuccessfull}
          sx={{ mb: 2 }}
        >
          Add Another Car
        </Button>
        <div style={{ width: '100%', textAlign: 'center', borderRadius: '4px', backgroundColor: 'rgb(229, 246, 253)', padding: '20px' }}
        >
          <div
          >I AFFIRM I HAVE READ THE CURRENT RULES OF CONDUCT AND RENTAL POLICY AND I AM AWARE OF THE TRASH COMPACTOR HOURS UPON CHECKOUT TIME.</div>
          <a style={{ color: 'blue' }} href="https://www.towamensing.com/documents2010/rules%20of%20conduct%202010.pdf" target='_blank'>Towamensing Trails Rules of Conduct</a>
        </div>
        {/* Car inputs and buttons here, wrapped in Grid components as above */}
        <Typography variant="h6" sx={{ mt: 4 }}>Signature</Typography>



        <SignaturePad
          ref={sigCanvasRef}
          canvasProps={{ className: 'signatureCanvas' }}
          onEnd={onSignatureChange}
          disabled={isSuccessfull}
        // other props you might need
        />

        <Box sx={{ display: 'flex', justifyContent: 'right' }}>
          <Button disabled={isSuccessfull || isLoading} variant="contained" onClick={clearSignature}>Clear Signature</Button>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button disabled={isLoading || isSuccessfull || isSubmitDisabled} type="submit" variant="contained" sx={{ mt: 3, px: 5, mb: 3 }}>
            {isLoading ? 'Submitting...' : 'Submit'}

          </Button>
        </Box>
      </Box>
    </Container>
  );
}

function formatDate(date) {
  const dateObj = new Date(date + 'T00:00');
  return `${dateObj.getMonth() + 1}/${dateObj.getDate()}/${dateObj.getFullYear()}`;
}
