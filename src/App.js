import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import './App.css';
import DigitalGuideBook from './Components/DigitalGuidebook/DigitalGuidebook';
import Header from './Components/DigitalGuidebook/Header';

import ContactUs from './Components/DigitalGuidebook/ContactUs';
import ThingsToDo from './Components/DigitalGuidebook/ThingsToDo';
import Welcome from './Components/DigitalGuidebook/Welcome';
import ArrivalInfo from './Components/DigitalGuidebook/ArrivalInfo';
import BeforeYouLeave from './Components/DigitalGuidebook/BeforeYouLeave';
import HouseRules from './Components/DigitalGuidebook/HouseRules';
import Amenities from './Components/DigitalGuidebook/Amenities';
import Community from './Components/DigitalGuidebook/Community';
import useScrollRestoration from './UseScrollRestoration';
import ComingSoon from './Components/ComingSoon';
import TowamensingForm from './Components/TowamensingForm';



function App() {
    useScrollRestoration();
    const location = useLocation();
    const [showComingSoon, setShowComingSoon] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        location.pathname !== '/' ? setShowComingSoon(true) : setShowComingSoon(false);
    }, [location]);

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setIsMobile(window.innerWidth <= 768);
        }
        
        // Add event listener
        window.addEventListener("resize", handleResize);
        
        // Call handler right away so state gets updated with initial window size
        handleResize();
        
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    if (!isMobile) {
        return <ComingSoon />;
    }

    return (
        <>
            {showComingSoon ?
                <div>
                    <Header className="header" />

                    <div className="main-content">
                        <AnimatePresence mode="wait">
                            <Routes location={location} key={location.pathname}>
                                <Route 
                                    path="/bishop/digitalguidebook" 
                                    element={
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <DigitalGuideBook />
                                        </motion.div>
                                    } 
                                />
                                <Route path="/bishop/form" element={<TowamensingForm />} />
                                <Route path="/bishop/digitalguidebook/thingstodo" element={<ThingsToDo />} />
                                <Route path="/bishop/digitalguidebook/contactus" element={<ContactUs />} />
                                <Route path='/bishop/digitalguidebook/welcome' element={<Welcome />}></Route>
                                <Route path='/bishop/digitalguidebook/arrivalinfo' element={<ArrivalInfo />}></Route>
                                <Route path='/bishop/digitalguidebook/beforeyouleave' element={<BeforeYouLeave />}></Route>
                                <Route path='/bishop/digitalguidebook/houserules' element={<HouseRules />}></Route>
                                <Route path='/bishop/digitalguidebook/amenities' element={<Amenities />}></Route>
                                <Route path='/bishop/digitalguidebook/community' element={<Community />}></Route>
                            </Routes>
                        </AnimatePresence>
                    </div>
                </div>
                : <ComingSoon />}

        </>


    );
}

export default App;
