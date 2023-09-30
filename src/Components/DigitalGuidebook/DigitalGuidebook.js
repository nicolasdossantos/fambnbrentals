import React from 'react';
import TileGrid from './TileGrid';
import coverImage from '../../cover.png'
import Alert from '@mui/material/Alert';
import WifiIcon from '@mui/icons-material/Wifi';


function DigitalGuideBook() {
  return (
    <div className="App">
      <div >
        <div>
          <img id="coverImage" src={coverImage} alt="logo" />
        </div>
        <Alert className="alert" severity="info" icon={<WifiIcon></WifiIcon>}>
          <p className="alert-text">Network: <b>Fam BnB</b> | Password: <b>Poconos2023</b></p>
        </Alert>
        <TileGrid></TileGrid>
      </div>

    </div>
  );
}

export default DigitalGuideBook;
