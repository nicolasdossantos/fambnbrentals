import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import DigitalGuideBook from './Components/DigitalGuidebook/DigitalGuidebook'
import MapComponent from './Components/DigitalGuidebook/MapComponent';
import Header from './Components/DigitalGuidebook/Header';
import Footer from './Components/DigitalGuidebook/Footer';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

import { InteractiveBrowserCredential } from '@azure/identity';
import { SecretClient } from '@azure/keyvault-secrets';



async function getApiKey() {
  const credential = new InteractiveBrowserCredential({
    clientId: " ae2a2a98-04d6-4c32-a052-eb3518ae6817", // The Client Id of your registered app in Azure AD
  });
  const vaultUrl = "https://fambnbkv.vault.azure.net/"; // Replace with your Key Vault URI
  const secretName = "googlemapsapikey"; // Replace with your Secret Name
  //

  const client = new SecretClient(vaultUrl, credential);
  try {
    const secret = await client.getSecret(secretName);
    return secret.value;
  } catch (error) {
    console.error('Error accessing key vault:', error);
    throw error;
  }
}

function App() {
  const libraries = ["places"];
  const [apiKey, setApiKey] = useState(""); // Add a state variable for apiKey
  
  useEffect(() => {
    async function fetchData() {
      const key = await getApiKey(); // Get the API key
      setApiKey(key); // Set the API key in the state
    }
    fetchData();
  }, []);
  
  // const [timer, setTimer] = React.useState(null);
  // const history = useNavigate();

  // const isOnInitialPage = () => history.location.pathname === '/';

  // const resetTimer = () => {  
  //   if (timer) clearTimeout(timer);
    
  //   if(isOnInitialPage()) return;
  

  //   setTimer(setTimeout(() => {
  //     history.push('/'); 
  //   }, 300000));
  // };

  // const handleInteraction = () => {
  //   if(!isOnInitialPage()) resetTimer();
  // }

  // React.useEffect(() => {
  //   if(!isOnInitialPage()) {
  //     resetTimer();
  //   }
  //   window.addEventListener('touchstart', handleInteraction);
  //   window.addEventListener('click', handleInteraction);
    
  //   // Cleanup function to remove event listeners when the component unmounts
  //   return () => {
  //     window.removeEventListener('touchstart', handleInteraction);
  //     window.removeEventListener('click', handleInteraction);
  //     if(timer) clearTimeout(timer);
  //   };
  // }, [history.location.pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<DigitalGuideBook />} />
        <Route path="/thingstodo" element={
          <LoadScript googleMapsApiKey={apiKey} libraries={libraries}>
          <MapComponent />

          </LoadScript>
        
        
        } />
      </Routes>
      <Footer />
    </>




    
    
  );
}

export default App;
