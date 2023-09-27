import React from 'react';
import './App.css';
import TileGrid from './Components/DigitalGuidebook/TileGrid';
import coverImage from './cover.png'
import Header from './Components/DigitalGuidebook/Header';
import Footer from './Components/DigitalGuidebook/Footer';
import Alert from '@mui/material/Alert';
import WifiIcon from '@mui/icons-material/Wifi';

function App() {
  

  
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
