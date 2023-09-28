import React from 'react';
import './App.css';
import TileGrid from './Components/DigitalGuidebook/TileGrid';
import coverImage from './cover.png'
import Header from './Components/DigitalGuidebook/Header';
import Footer from './Components/DigitalGuidebook/Footer';
import Alert from '@mui/material/Alert';
import WifiIcon from '@mui/icons-material/Wifi';

function App() {

  const [timer, setTimer] = React.useState(null);
  const history = React.useHistory();

  const isOnInitialPage = () => history.location.pathname === '/';

  const resetTimer = () => {  
    if (timer) clearTimeout(timer);
    
    if(isOnInitialPage()) return;
  

    setTimer(setTimeout(() => {
      history.push('/'); 
    }, 300000));
  };

  const handleInteraction = () => {
    if(!isOnInitialPage()) resetTimer();
  }

  React.useEffect(() => {
    if(!isOnInitialPage()) {
      resetTimer();
    }
    window.addEventListener('touchstart', handleInteraction);
    window.addEventListener('click', handleInteraction);
    
    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('click', handleInteraction);
      if(timer) clearTimeout(timer);
    };
  }, [history.location.pathname]);

  return (
    <div className="App">
      <Header props={window}></Header>
      <div >
     
        <div>
          <img id="coverImage" src={coverImage} alt="logo" />
        </div>
        <Alert className="alert" severity="info" icon={<WifiIcon></WifiIcon>}>
          <p className="alert-text">Network: <b>Fam BnB</b> | Password: <b>Poconos2023</b></p>

          </Alert>
        <TileGrid></TileGrid>
      </div>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
