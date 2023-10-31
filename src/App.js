import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import './App.css';
import DigitalGuideBook from './Components/DigitalGuidebook/DigitalGuidebook';
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
import useScrollRestoration from './UseScrollRestoration';


function App() {
  useScrollRestoration();
  const [timer, setTimer] = React.useState(null);
  const navigate = useNavigate();
  const location = useLocation();

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

  useEffect(() => {
    
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


  return (
    <>
      <Header className="header"/>

     
      <div className="main-content">
        
        <Routes>
     
          <Route path="/" element={<DigitalGuideBook />} />
          <Route path="/thingstodo" element={<ThingsToDo />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path='/welcome' element={<Welcome />}></Route>
          <Route path='/arrivalinfo' element={<ArrivalInfo />}></Route>
          <Route path='/beforeyouleave' element={<BeforeYouLeave />}></Route>
          <Route path='/houserules' element={<HouseRules />}></Route>
          <Route path='/amenities' element={<Amenities />}></Route>
          <Route path='/community' element={<Community />}></Route>
        </Routes>
      </div>
      
    </>


  );
}

export default App;
