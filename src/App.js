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
import DigitalGuideBookDesktop from './Components/DigitalGuidebook/DigitalGuidebookDesktop';
import Alert from '@mui/material/Alert';
import BishopForm from './Components/BishopForm';
import WifiIcon from '@mui/icons-material/Wifi';


function App() {
    useScrollRestoration();
    const location = useLocation();
    const [showComingSoon, setShowComingSoon] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // const [isMobile, setIsMobile] = useState(false);

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
        return <BishopForm />;
        // return (<>
        //     <div>
        //         <Header className="header" isMobile={false} />
               
        //         <div>
        //             <div className="desktop-sidebar">
        //             {/* <Alert className="alert-desktop description-font" severity="info" icon={<WifiIcon className="icon icon-font" />}>
        //             <p className="alert-text">Network: <b>FAM BNB</b> | Password: <b>Poconos2023</b></p>
        //         </Alert> */}
        //                 <DigitalGuideBookDesktop />
        //             </div>

        //             <div className="desktop-main-content">
       
        //                 <AnimatePresence mode="wait">
        //                     <Routes location={location} key={location.pathname}>
        //                         <Route
        //                             path="/bishop/digitalguidebook"
        //                             element={
        //                                 <motion.div
        //                                     initial={{ opacity: 0 }}
        //                                     animate={{ opacity: 1 }}
        //                                     exit={{ opacity: 0 }}
        //                                     transition={{ duration: 0.2 }}
        //                                 >
        //                                     <DigitalGuideBook />
        //                                 </motion.div>
        //                             }
        //                         />
        //                         <Route path="/bishop/digitalguidebook/thingstodo" element={<ThingsToDo isMobile={false}/>} />
        //                         <Route path="/bishop/digitalguidebook/contactus" element={<ContactUs isMobile={false}/>} />
        //                         <Route path='/bishop/digitalguidebook/welcome' element={<Welcome isMobile={false}/>}></Route>
        //                         <Route path='/bishop/digitalguidebook/arrivalinfo' element={<ArrivalInfo isMobile={false}/>}></Route>
        //                         <Route path='/bishop/digitalguidebook/beforeyouleave' element={<BeforeYouLeave isMobile={false} />}></Route>
        //                         <Route path='/bishop/digitalguidebook/houserules' element={<HouseRules isMobile={false}/>}></Route>
        //                         <Route path='/bishop/digitalguidebook/amenities' element={<Amenities isMobile={false}/>}></Route>
        //                         <Route path='/bishop/digitalguidebook/community' element={<Community isMobile={false}/>}></Route>
        //                     </Routes>
        //                 </AnimatePresence>
        //             </div>
        //         </div>
        //     </div>

        // </>


        // );
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
