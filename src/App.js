import React from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import DigitalGuideBook from './Components/DigitalGuidebook/DigitalGuidebook'
import MapComponent from './Components/DigitalGuidebook/MapComponent';
import Header from './Components/DigitalGuidebook/Header';
import Footer from './Components/DigitalGuidebook/Footer';


function App() {

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
        <Route path="/thingstodo" element={<MapComponent />} />
      </Routes>
      <Footer />
    </>




    
    
  );
}

export default App;
