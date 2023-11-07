import React from 'react';
import TileGrid from './TileGrid';
import coverImage from '../../photos/general/cover_50.jpg';
import Alert from '@mui/material/Alert';
import WifiIcon from '@mui/icons-material/Wifi';
import '../../style/DigitalGuideBook.css';
import TileGridDesktop from './TileGridDesktop';

function DigitalGuideBookDesktop() {
  const propertyId = "";
  
  const [guestyAPIKey, setGuestyAPIKey] = React.useState("");
  

  React.useEffect(() => {
    if(guestyAPIKey === ""){

    }
  }, []);

  const reservationInfo = {
    guestName: "John",
    checkInDate: "Oct 15, 2023",
    checkOutDate: "Oct 20, 2023"
  };

  return (
    <div className="App main">
      <div style={{marginTop:"100px"}}>
    
       
        <TileGridDesktop />
      </div>
    </div>
  );
}

export default DigitalGuideBookDesktop;