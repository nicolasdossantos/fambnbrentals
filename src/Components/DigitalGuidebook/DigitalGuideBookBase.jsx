import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import './App.css';
import DigitalGuideBook from '././DigitalGuidebook';
import Header from './Header';
import Footer from './Footer';
import ContactUs from './ContactUs';
import ThingsToDo from './ThingsToDo';
import Welcome from './Welcome';
import ArrivalInfo from './ArrivalInfo';
import BeforeYouLeave from './BeforeYouLeave';
import HouseRules from './HouseRules';
import Amenities from './Amenities';
import Community from './Community';
import useScrollRestoration from './UseScrollRestoration';



const DigitalGuideBookBase = () => {
    useScrollRestoration();
    const location = useLocation();



    return (
        <>
            
        </>
    )

}