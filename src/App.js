import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

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
  const location = useLocation();

  return (
    <>
      <Header className="header" />



      <div className="main-content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>

            <Route path="/" element={<motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <DigitalGuideBook />
            </motion.div>} />


            <Route path="/thingstodo" element={

              <ThingsToDo />

            } />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path='/welcome' element={<Welcome />}></Route>
            <Route path='/arrivalinfo' element={<ArrivalInfo />}></Route>
            <Route path='/beforeyouleave' element={<BeforeYouLeave />}></Route>
            <Route path='/houserules' element={<HouseRules />}></Route>
            <Route path='/amenities' element={<Amenities />}></Route>
            <Route path='/community' element={<Community />}></Route>
          </Routes>
        </AnimatePresence>
      </div>

    </>


  );
}

export default App;
