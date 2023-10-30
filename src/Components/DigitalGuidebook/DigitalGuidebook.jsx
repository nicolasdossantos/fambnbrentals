import React from 'react';
import TileGrid from './TileGrid';
import coverImage from '../../photos/general/cover_50.jpg'
import Alert from '@mui/material/Alert';
import WifiIcon from '@mui/icons-material/Wifi';
import '../../style/DigitalGuideBook.css';

function DigitalGuideBook() {
  const reservationInfo = {
    guestNames: "John & Jane",
    checkInDate: "Oct 15, 2023",
    checkOutDate: "Oct 20, 2023"
  };

  return (
    <div className="App main">
      <div>
        <div className="cover-container">
         
            <img id="coverImage" src={coverImage} alt="Cover" />
          
          <div className="reservation-card">
            <div className="reservation-card-title">{reservationInfo.guestNames}</div>
            <p><strong>Check-in:</strong> {reservationInfo.checkInDate}</p>
            <p><strong>Check-out:</strong> {reservationInfo.checkOutDate}</p>
          </div>
        </div>
        <Alert className="alert" severity="info" icon={<WifiIcon className="icon"/>}>
          <p className="alert-text">Network: <b>Fam BnB</b> | Password: <b>Poconos2023</b></p>
        </Alert>
        <TileGrid />
      </div>
    </div>
  );
}

export default DigitalGuideBook;