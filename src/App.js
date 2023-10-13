import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { LoadScript } from '@react-google-maps/api';
import axios from 'axios';

import './App.css';
import DigitalGuideBook from './Components/DigitalGuidebook/DigitalGuidebook';
import MapComponent from './Components/DigitalGuidebook/MapComponent';
import Header from './Components/DigitalGuidebook/Header';
import Footer from './Components/DigitalGuidebook/Footer';
import ContactUs from './Components/DigitalGuidebook/ContactUs';
import ThingsToDo from './Components/DigitalGuidebook/ThingsToDo';
import Welcome from './Components/DigitalGuidebook/Welcome';
import ArrivalInfo from './Components/DigitalGuidebook/ArrivalInfo';
import BeforeYouLeave from './Components/DigitalGuidebook/BeforeYouLeave';  
import HouseRules from './Components/DigitalGuidebook/HouseRules';
import Amenities from './Components/DigitalGuidebook/Amenities';
import Community from './Components/DigitalGuidebook/Community';

function App() {

  const libraries = ["places"];
  const [apiKey, setApiKey] = useState("");
  const [timer, setTimer] = React.useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const placeNames = ["Big Boulder Ski Resort", "Hawk Falls", "CamelBack Ski Resort"]

  useEffect(() => {
    async function fetchData() {
      //todo: Get key later
      console.log("Place names", placeNames)
      if (apiKey !== "") return;
      await getApiKey();
    }
    fetchData();
  }, []);

  const isOnInitialPage = () => location.pathname === "/";

  const resetTimer = () => {
    if (timer) clearTimeout(timer);

    if (isOnInitialPage()) return;


    setTimer(setTimeout(() => {
      navigate('/');
    }, 300000));
  };

  const handleInteraction = () => {
    if (!isOnInitialPage()) resetTimer();
  }

  React.useEffect(() => {
    if (!isOnInitialPage()) {
      resetTimer();
    }
    window.addEventListener('touchstart', handleInteraction);
    window.addEventListener('click', handleInteraction);

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('click', handleInteraction);
      if (timer) clearTimeout(timer);
    };
  }, []);


  async function getApiKey() {
    const url = 'https://fambnbserver.azurewebsites.net/api/serverhttp?code=KqYL-V3aVOoeyF1EM617QgxRqYo_EirL1AHMWgasAXVmAzFuSsRP3w==';  // Update the URL to match the new function name
    axios.post(url, JSON.stringify({ googleApiKey: "getGoogleAPIKey" }), {
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => {
        console.log('Success:', response.data);
        setApiKey(response.data);
      })
      .catch(err => console.error('Error:', err))
  };

  return (
    <>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<DigitalGuideBook />} />
          <Route path="/thingstodo" element={
          apiKey === "" ? <h1>Loading...</h1> :
            <LoadScript googleMapsApiKey={apiKey} libraries={libraries}>
              <MapComponent businessNames={placeNames}/>
            </LoadScript>
        } />
          {/* <Route path="/thingstodo" element={<ThingsToDo />} /> */}
          <Route path="/contactus" element={<ContactUs />} />
          <Route path='/welcome' element={<Welcome />}></Route>
          <Route path='/arrivalinfo' element={<ArrivalInfo />}></Route>
          <Route path='/beforeyouleave' element={<BeforeYouLeave />}></Route>
          <Route path='/houserules' element={<HouseRules />}></Route>
          <Route path='/amenities' element={<Amenities />}></Route>
          <Route path='/community' element={<Community />}></Route>
        </Routes>
      </div>
      <Footer />
    </>






  );
}

export default App;
