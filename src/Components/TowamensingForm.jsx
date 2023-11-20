import React, { useCallback, useEffect, useMemo, useRef, useState, Suspense, lazy   } from 'react';
import { useParams } from 'react-router-dom';
import SignaturePad from 'react-signature-canvas';
import { Box, TextField, Button, IconButton, Typography, Grid, Container } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import '../style/TowamensingForm.css';

const CarInput = React.memo(({ car, index, isSuccessfull, onCarChange, onRemoveCar }) => (
  <Box sx={{ mb: 2 }}>
    <TextField
      fullWidth
      required
      label="Car Plate"
      name="plate"
      value={car.plate}
      onChange={onCarChange(index)}
      disabled={isSuccessfull}
      sx={{ mr: 1, mt: 1 }}
    />
    <TextField
      fullWidth
      required
      label="State"
      name="state"
      value={car.state}
      onChange={onCarChange(index)}
      disabled={isSuccessfull}
      sx={{ mr: 1, mt: 1 }}
    />
    <IconButton onClick={() => onRemoveCar(index)} disabled={isSuccessfull}>
      <RemoveCircleOutlineIcon />
    </IconButton>
  </Box>
));


export default function TowamensingForm() {
  let { firstName, lastName, startDate, endDate } = useParams();
  const [cars, setCars] = useState([{ plate: '', state: '' }]);
  const [firstNameState, setFirstNameState] = useState(firstName || '');
  const [lastNameState, setLastNameState] = useState(lastName || '');
  const [startDateState, setStartDateState] = useState(startDate || '');
  const [endDateState, setEndDateState] = useState(endDate || '');
  const [isSuccessfull, setIsSuccessfull] = useState(false);

  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);


  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const ownerName = 'Nicolas dos Santos';
  const ownerPhoneNumber = '267-721-0098';
  const lotNumber = '1352';
  const houseNumber = '194';
  const houseStreet = 'Bishop Circle';

  const cleaningCrewName = 'Gena O\'Connor';
  const cleaningCrewPhoneNumber = '570-926-0282';


  const handleCarChange = useCallback((index) => (event) => {
    setCars((currentCars) => {
      const newCars = [...currentCars];
      newCars[index] = { ...newCars[index], [event.target.name]: event.target.value };
      return newCars;
    });
  }, []);

  const handleAddCar = useCallback(() => {
    setCars((currentCars) => [...currentCars, { plate: '', state: '' }]);
  }, []);

  const handleRemoveCar = useCallback((index) => {
    setCars((currentCars) => currentCars.filter((_, carIndex) => index !== carIndex));
  }, []);


  const sigCanvasRef = useRef({});
  const [signatureData, setSignatureData] = useState('');

  const carsElements = useMemo(() => cars.map((car, index) => (
    <CarInput
      key={index}
      car={car}
      index={index}
      isSuccessfull={isSuccessfull}
      onCarChange={handleCarChange}
      onRemoveCar={handleRemoveCar}
    />
  )), [cars, isSuccessfull, handleCarChange, handleRemoveCar]);


  const clearSignature = () => {
    sigCanvasRef.current.clear();
    setSignatureData('');
  };

  const formatDate = (date) => {
    // Append the time 'T00:00' to ensure the date is treated as local
    const dateObj = new Date(date + 'T00:00');
    return `${dateObj.getMonth() + 1}/${dateObj.getDate()}/${dateObj.getFullYear()}`;
  };

  const onSignatureChange = () => {
    setSignatureData(sigCanvasRef.current.getTrimmedCanvas().toDataURL('image/png'));
  }

  const populateCars = (dataForm, cars) => {
    cars.forEach((car, index) => {
      dataForm[`car${index + 1}Plate`] = car.plate;
      dataForm[`car${index + 1}State`] = car.state;
    });

    return dataForm;

  }

  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    
    // setSignatureData(sigCanvasRef.current.getTrimmedCanvas().toDataURL('image/png'));

    const dataForm = {
      ownerName,
      lotNumber,
      houseNumber,
      houseStreet,
      cleaningCrewName,
      cleaningCrewPhoneNumber,
      guestFirstName: firstNameState,
      guestLastName: lastNameState,
      cleanerNameAndPhoneNumber: cleaningCrewName + ' ' + cleaningCrewPhoneNumber,
      guestFullName: firstNameState + ' ' + lastNameState,
      guestAddress: address,
      guestCity: city,
      guestState: state,
      guestZip: zip,
      ownerPhoneNumber,
      guestPhoneNumber: phone,
      guestSignature: signatureData,
      todaysDate: new Date().toLocaleDateString(), //check
      startDate: formatDate(startDateState),
      endDate: formatDate(endDateState),
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

    const formDataWithCars = populateCars(dataForm, cars);
    setFormData(formDataWithCars);

    try {
      const response = await fetch('https://fambnbbackend.azurewebsites.net/api/ProcessForm?code=X8ZC7UFwAIHl16u5OoreMM8QT9AdDX0W7IyhVjMbuqOHAzFuwkUMnw==', {
        method: 'POST',
        body: JSON.stringify(formDataWithCars),
        headers: {
          'Content-Type': 'application/json'
        }
      });


      if (!response.ok) {
        setIsLoading(false);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setIsLoading(false);
      setIsSuccessfull(true);

      // You might want to do something upon success, e.g., redirect or show a message
    } catch (error) {
      console.error('Error during form submission:', error);
    }





  };

  return (
    <Container maxWidth="md">
      {isSuccessfull && (
        <Alert style={{ position: 'sticky', top: '0' }} severity="success" variant="filled">
          <AlertTitle>Thank You!</AlertTitle>
          Your form has been submitted successfully.
        </Alert>
      )}
      <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off" sx={{ mt: 4 }}>
        <Typography variant="h6">Personal Information</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              label="First Name"
              disabled
              value={firstNameState}
              onChange={(e) => setFirstNameState(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              label="Last Name"
              disabled
              value={lastNameState}
              onChange={(e) => setLastNameState(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="Email Address"
              disabled={isSuccessfull}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="Address"
              disabled={isSuccessfull}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              label="City"
              disabled={isSuccessfull}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              fullWidth
              required
              label="State"
              disabled={isSuccessfull}
              value={state}
              onChange={(e) => setState(e.target.value)}

            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              fullWidth
              required
              label="Zip"
              disabled={isSuccessfull}
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="Phone Number"
              disabled={isSuccessfull}
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Grid>
        </Grid>


        <Typography variant="h6" sx={{ mt: 4 }}>Car Information (Please add all cars that will be parked at the house)</Typography>
        {carsElements}
        <Button
          variant="outlined"
          startIcon={<AddCircleOutlineIcon />}
          onClick={handleAddCar}
          disabled={cars.length >= 5 || isSuccessfull}
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
        <Suspense fallback={<div>Loading...</div>}>
       
     
        <SignaturePad
          ref={sigCanvasRef}
          canvasProps={{ className: 'signatureCanvas' }}
          onEnd={onSignatureChange}
          disabled={isSuccessfull}
        // other props you might need
        />
         </Suspense>
        <Box sx={{ display: 'flex', justifyContent: 'right' }}>
          <Button disabled={isSuccessfull || isLoading} variant="contained" onClick={clearSignature}>Clear Signature</Button>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button disabled={isLoading || isSuccessfull} type="submit" variant="contained" sx={{ mt: 3, px: 5, mb: 3 }}>
            {isLoading ? 'Submitting...' : 'Submit'}

          </Button>
        </Box>
      </Box>
    </Container>
  );
}