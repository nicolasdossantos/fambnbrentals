import React, { useRef, useState } from 'react';
import SignaturePad from 'react-signature-canvas';
import { Box, TextField, Button, IconButton, Typography, Grid, Container } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import '../style/TowamensingForm.css';

export default function TowamensingForm() {
  const [cars, setCars] = useState([{ plate: '', state: '' }]);

  const handleCarChange = (index, event) => {
    const newCars = cars.map((car, carIndex) => {
      if (index !== carIndex) return car;
      return { ...car, [event.target.name]: event.target.value };
    });
    setCars(newCars);
  };

  const handleAddCar = () => {
    if (cars.length < 5) {
      setCars([...cars, { plate: '', state: '' }]);
    }
  };

  const sigCanvasRef = useRef({});
  const [signatureData, setSignatureData] = useState('');

  const saveSignature = () => {
    setSignatureData(sigCanvasRef.current.getTrimmedCanvas().toDataURL('image/png'));
  };

  const clearSignature = () => {
    sigCanvasRef.current.clear();
    setSignatureData('');
  };

  const handleRemoveCar = (index) => {
    setCars(cars.filter((_, carIndex) => index !== carIndex));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form submission here
    console.log('Form data', { /* form fields here */ cars });
  };

  return (
    <Container maxWidth="md">
      <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off" sx={{ mt: 4 }}>
        <Typography variant="h6">Personal Information</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth required label="First Name" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth required label="Last Name" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth required label="Email Address" type="email" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth required label="Address" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth required label="City" />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField fullWidth required label="State" />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField fullWidth required label="Zip" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth required label="Phone number" type="tel" />
          </Grid>
        </Grid>

        
<Typography variant="h6" sx={{ mt: 4 }}>Car Information</Typography>
{cars.map((car, index) => (
  <Box key={index} sx={{ mb: 2 }}>
    <TextField
      fullWidth
      required
      label="Car Plate"
      name="plate"
      value={car.plate}
      onChange={(event) => handleCarChange(index, event)}
      sx={{ mr: 1, mt: 1 }}
    />
    <TextField
      fullWidth
      required
      label="State"
      name="state"
      value={car.state}
      onChange={(event) => handleCarChange(index, event)}
      sx={{ mr: 1, mt: 1 }}
    />
    <IconButton onClick={() => handleRemoveCar(index)} disabled={cars.length === 1}>
      <RemoveCircleOutlineIcon />
    </IconButton>
  </Box>
))}
<Button
  variant="outlined"
  startIcon={<AddCircleOutlineIcon />}
  onClick={handleAddCar}
  disabled={cars.length >= 5}
  sx={{ mb: 2 }}
>
  Add Another Car
</Button>
        {/* Car inputs and buttons here, wrapped in Grid components as above */}
        <Typography variant="h6" sx={{ mt: 4 }}>Signature</Typography>
        <SignaturePad
          ref={sigCanvasRef}
          canvasProps={{ className: 'signatureCanvas' }}
          // other props you might need
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button variant="contained" onClick={clearSignature}>Clear</Button>
          <Button variant="contained" onClick={saveSignature}>Save</Button>
        </Box>

        <Button type="submit" variant="contained" sx={{ mt: 3 }}>Submit</Button>
      </Box>
    </Container>
  );
}