import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import SignaturePad from 'react-signature-canvas';
import { Box, TextField, Button, IconButton, Typography, Grid, Container } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ReactDOM from 'react-dom';
import '../style/TowamensingForm.css';
import InvisibleComponent from './InvisibleComponent';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function TowamensingForm() {
  let { firstName, lastName, startDate, endDate } = useParams();
  const [cars, setCars] = useState([{ plate: '', state: '' }]);
  const [firstNameState, setFirstNameState] = useState(firstName || '');
  const [lastNameState, setLastNameState] = useState(lastName || '');
  const [startDateState, setStartDateState] = useState(startDate || '');
  const [endDateState, setEndDateState] = useState(endDate || '');


  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const ownerInitialsPath = 'https://fambnbstorage.blob.core.windows.net/signatures/initials.png';
  const ownerSignaturePath = 'https://fambnbstorage.blob.core.windows.net/signatures/signature.png';
  const ownerName = 'Nicolas dos Santos';
  const ownerPhoneNumber = '267-721-0098';
  const lotNumber = '1352';
  const houseNumber = '194';
  const houseStreet = 'Bison Circle';

  const cleaningCrewName = 'Gena O\'Connor';
  const cleaningCrewPhoneNumber = '570-926-0282';


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


  const clearSignature = () => {
    sigCanvasRef.current.clear();
    setSignatureData('');
  };

  const handleRemoveCar = (index) => {
    setCars(cars.filter((_, carIndex) => index !== carIndex));
  };

  const onSignatureChange = () => {
    setSignatureData(sigCanvasRef.current.getTrimmedCanvas().toDataURL('image/png'));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    // setSignatureData(sigCanvasRef.current.getTrimmedCanvas().toDataURL('image/png'));

    // Prepare the payload
    const formData = {
      guestFirstName: firstNameState,  // STR Name
      guestLastName: lastNameState, // STR Name
      startDate: startDateState,  // FROM
      endDate: endDateState, // TO
      guestEmail: email, // For DB only
      guestPhoneNumber: phone, // (PHONE)
      guestAddress: address, //STR MAILING ADDRESS
      guestCity: city, // CITY
      guestState: state,  // STATE
      cars, // FOR EACH CAR -> STATE + PLATE #
      guestSignature: signatureData, // SIGNATURE OF STR
      ownerInitialsPath, //(PROPERTY OWNER/AGENT MUST INITIAL...)
      ownerSignaturePath, // SIGNATURE OF PROPERTY OWNER/AGENT
      ownerName, // NAME OF PROPERTY OWNER
      ownerPhoneNumber, // FOR QUESTIONS/COMPLAINTS PLEASE CONTACT
      lotNumber, // ACCT/LOT #
      houseNumber, // 911 #
      houseStreet, // STREET
      cleaningCrewName, //WHO WILL BE PICKING UP STR PACKET (NAME & PHONE NUMBER)
      cleaningCrewPhoneNumber, //WHO WILL BE PICKING UP STR PACKET (NAME & PHONE NUMBER)
    };
    
    try {
      const response = await fetch('https://fambnbbackend.azurewebsites.net/api/getSecrets?code=X8ZC7UFwAIHl16u5OoreMM8QT9AdDX0W7IyhVjMbuqOHAzFuwkUMnw==', {
        method: 'POST',
        body: JSON.stringify({type: 'SAS'}),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const sasToken  = await response.text();
      console.log(sasToken);
      generatePDFBlob(formData).then((pdfBlob) => {
        uploadPDF(pdfBlob, sasToken);
      });

      // You might want to do something upon success, e.g., redirect or show a message
    } catch (error) {
      console.error('Error during form submission:', error);
    }
    
    
    

    


  };

  const generatePDFBlob = async (formData) => {
    // Create a container for the off-screen rendering
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.left = '-9999px'; // Move off-screen
    document.body.appendChild(container);
  
    // Render your custom component inside the container
    ReactDOM.render(<InvisibleComponent formData={formData} />, container);
  
    // Wait for the next repaint to ensure the component is rendered
    await new Promise((resolve) => setTimeout(resolve, 0));
  
    // Convert the rendered component to canvas and then to a PDF
    const canvas = await html2canvas(container);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });
    pdf.addImage(imgData, 'PNG', 0, 0);
    const pdfBlob = pdf.output('blob');
  
    // Clean up: remove the off-screen container
    ReactDOM.unmountComponentAtNode(container);
    container.parentNode.removeChild(container);
  
    return pdfBlob;
  };

  const uploadPDF = async (pdfBlob, sasToken) => {
    const blobName = `${new Date().toISOString()}.pdf`;
    const url = `https://fambnbstorage.blob.core.windows.net/pdf-container/pdfs/${blobName}${sasToken}`;
  
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'x-ms-blob-type': 'BlockBlob',
          'Content-Type': 'application/pdf'
        },
        body: pdfBlob
      });
  
      if (!response.ok) throw new Error('Failed to upload PDF');
      console.log('PDF uploaded to blob storage.');
    } catch (error) {
      console.error('Failed to upload PDF:', error);
    }
  };


  return (
    <Container maxWidth="md">
      <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off" sx={{ mt: 4 }}>
        <Typography variant="h6">Personal Information</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              label="First Name"
              value={firstNameState}
              onChange={(e) => setFirstNameState(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              label="Last Name"
              value={lastNameState}
              onChange={(e) => setLastNameState(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="Email Address"
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
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              label="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              fullWidth
              required
              label="State"
              value={state}
              onChange={(e) => setState(e.target.value)}

            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              fullWidth
              required
              label="Zip"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="Phone Number"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
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
          onEnd={onSignatureChange}
        // other props you might need
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button variant="contained" onClick={clearSignature}>Clear</Button>
        </Box>

        <Button type="submit" variant="contained" sx={{ mt: 3 }}>Submit</Button>
      </Box>
    </Container>
  );
}