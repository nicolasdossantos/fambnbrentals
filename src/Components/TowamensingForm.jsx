import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import SignaturePad from 'react-signature-canvas';
import { Box, TextField, Button, IconButton, Typography, Grid, Container } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ReactDOM from 'react-dom';
import '../style/TowamensingForm.css';
import InvisibleComponent from './InvisibleComponent';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Signature from '../photos/form/signature.png';
import Initials from '../photos/form/initials.png';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function TowamensingForm() {
  let { firstName, lastName, startDate, endDate } = useParams();
  const [shouldShowForm, setShouldShowForm] = useState(true);
  const [cars, setCars] = useState([{ plate: '', state: '' }]);
  const [firstNameState, setFirstNameState] = useState(firstName || '');
  const [lastNameState, setLastNameState] = useState(lastName || '');
  const [startDateState, setStartDateState] = useState(startDate || '');
  const [endDateState, setEndDateState] = useState(endDate || '');
  const [isSuccessfull, setIsSuccessfull] = useState(false);
  const [signature, setSignature] = useState(Signature);
  
  const [initials, setInitials] = useState(Initials);
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
    setIsLoading(true);
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
      initials, //(PROPERTY OWNER/AGENT MUST INITIAL...)
      signature, // SIGNATURE OF PROPERTY OWNER/AGENT,
      guestZip: zip, // ZIP
      ownerName, // NAME OF PROPERTY OWNER
      ownerPhoneNumber, // FOR QUESTIONS/COMPLAINTS PLEASE CONTACT
      lotNumber, // ACCT/LOT #
      houseNumber, // 911 #
      houseStreet, // STREET
      cleaningCrewName, //WHO WILL BE PICKING UP STR PACKET (NAME & PHONE NUMBER)
      cleaningCrewPhoneNumber, //WHO WILL BE PICKING UP STR PACKET (NAME & PHONE NUMBER)
    };

    setFormData(formData);
    
    try {
      const response = await fetch('https://fambnbbackend.azurewebsites.net/api/getSecrets?code=X8ZC7UFwAIHl16u5OoreMM8QT9AdDX0W7IyhVjMbuqOHAzFuwkUMnw==', {
        method: 'POST',
        body: JSON.stringify({type: 'PDF-SAS'}),
        headers: {
          'Content-Type': 'application/json'
        }
      });
     

      if (!response.ok) {
        
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const sasToken  = await response.text();
      generatePDFBlob(formData).then((pdfBlob) => {
        uploadPDF(pdfBlob, sasToken, `${firstNameState}_${lastNameState}_${startDateState}_${endDateState}.pdf`);
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
    container.style.height = '279.4mm';
    container.style.width = '215.9mm';
    container.style.left = '-9999px'; // Move off-screen
    document.body.appendChild(container);
  
    // Render your custom component inside the container
    ReactDOM.render(<InvisibleComponent formData={formData} />, container);
  
    // Wait for the next repaint to ensure the component is rendered
    await new Promise((resolve) => setTimeout(resolve, 0));
  
    // Convert the rendered component to canvas and then to a PDF
    const canvas = await html2canvas(container, {
      width: container.offsetWidth,
      height: container.offsetHeight,
      scale: 2, // Adjust scale as needed
      useCORS: true, // If you're loading images from external URLs
      onclone: (document) => {
        // Ensure the cloned document will be visible for html2canvas
        document.body.style.visibility = 'visible';
      }
    });
    const pdfWidth = 215.9;
    const pdfHeight = 279.4;
  
    // Create a jsPDF instance with the correct dimensions
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: [pdfWidth, pdfHeight]
    });
  
    // Add the image to the jsPDF instance
    pdf.addImage(canvas.toDataURL('image/jpeg', 1.0), 'JPEG', 0, 0, pdfWidth, pdfHeight);
  
    const pdfBlob = pdf.output('blob');
  
    // Clean up: remove the off-screen container
    ReactDOM.unmountComponentAtNode(container);
    container.parentNode.removeChild(container);
  
    return pdfBlob;
  };


const uploadPDF = async (pdfBlob, sasTokenBase, blobName) => {
  const url = `https://fambnbstorage.blob.core.windows.net/pdf-container/${blobName}?${sasTokenBase}`;

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'x-ms-blob-type': 'BlockBlob',
        'Content-Type': 'application/pdf',
        'Content-Length': pdfBlob.size
      },
      body: pdfBlob
    });

    if (!response.ok) throw new Error(`Failed to upload PDF: ${response.statusText}`);
    console.log('PDF uploaded to blob storage.');
    setIsSuccessfull(true);
    setIsLoading(false);
  } catch (error) {
    console.error('Failed to upload PDF:', error);
  }
};




  return (
    <Container maxWidth="md">
    {isSuccessfull &&
      <Alert style={{position:'sticky', top:'0'}} severity="success" variant="filled">
          <AlertTitle>Thank You!</AlertTitle>
          Your form has been submitted successfully. 
        </Alert>
    }
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
        {cars.map((car, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <TextField
              fullWidth
              required
              label="Car Plate"
              name="plate"
              value={car.plate}
              onChange={(event) => handleCarChange(index, event)}
              disabled={isSuccessfull}
              sx={{ mr: 1, mt: 1 }}
            />
            <TextField
              fullWidth
              required
              label="State"
              name="state"
              value={car.state}
              onChange={(event) => handleCarChange(index, event)}
              disabled={isSuccessfull}
              sx={{ mr: 1, mt: 1 }}
            />
            <IconButton onClick={() => handleRemoveCar(index)} disabled={cars.length === 1 || isSuccessfull}>
              <RemoveCircleOutlineIcon />
            </IconButton>
          </Box>
        ))}
        <Button
          variant="outlined"
          startIcon={<AddCircleOutlineIcon />}
          onClick={handleAddCar}
          disabled={cars.length >= 5 || isSuccessfull}
          sx={{ mb: 2 }}
        >
          Add Another Car
        </Button>
        <div             style={{width: '100%', textAlign: 'center', borderRadius: '4px', backgroundColor: 'rgb(229, 246, 253)', padding: '20px'}}
>
          <div 
          >I AFFIRM I HAVE READ THE CURRENT RULES OF CONDUCT AND RENTAL POLICY AND I AM AWARE OF THE TRASH COMPACTOR HOURS UPON CHECKOUT TIME.</div>
          <a style={{color: 'blue'}} href="https://www.towamensing.com/documents2010/rules%20of%20conduct%202010.pdf" target='_blank'>Towamensing Trails Rules of Conduct</a>
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
          <Button disabled={isSuccessfull} variant="contained" style={{ backgroundColor: '#7AC7C4' }} onClick={clearSignature}>Clear Signature</Button>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
        <Button type="submit" disabled={isLoading || isSuccessfull} variant="contained" style={{ backgroundColor: '#7AC7C4' }} sx={{ mt: 3, px: 5, mb: 3}}>
          {isLoading ?  'Submitting...' : 'Submit'}
        
        </Button>
        </Box>
      </Box>
    </Container>
  );
}