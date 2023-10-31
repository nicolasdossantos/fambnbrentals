import React from 'react';
import SmokeFreeRoundedIcon from '@mui/icons-material/SmokeFreeRounded';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';
import PetsRoundedIcon from '@mui/icons-material/PetsRounded';
import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded';
import CelebrationRoundedIcon from '@mui/icons-material/CelebrationRounded';
import FlareRoundedIcon from '@mui/icons-material/FlareRounded';
import Button from '@mui/material/Button';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';



import { useNavigate } from 'react-router-dom';

import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const HouseRules = () => {
    const navigate = useNavigate();
    const styles = {
      container: {
        padding: '3vh 5vw',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    header: {
        backgroundColor: '#A9CCE3', // soft blue color
        padding: '1vh 2vw',
        borderRadius: '5px',
        displpay: 'flex',
        alignItems: 'center',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '2vh',
        justifyContent: 'center',
    },
    alert: {
        display: 'flex',
    
        backgroundColor: '#FFF4E5',
        padding: '2vh 4vw',
        fontWeight: 'bold',
        borderRadius: '5px',
        marginBottom: '2vh',
  
    },
    rule: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '1vh',
        padding: '2vh 4vw',
        border: '1px solid #e0e0e0',
        borderRadius: '5px',
    },
    icon: {
        marginRight: '5px',
    },
    footer: {
        color: '#A9CCE3',
        textAlign: 'center',
        marginTop: '2vh',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '2vh',
      
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header} className="title-font">
        {/* Placeholder for the icon */}
        <ChecklistRoundedIcon style={styles.icon} className="icon-font"/>
        House Rules
      </div>

      {/* Rule: No Smoking */}
      <div style={styles.rule}  className="description-font">
        <SmokeFreeRoundedIcon alt="No Smoking" style={styles.icon} className="icon-font"/>
        Please do not smoke inside the property. Designated areas are available outside.
      </div>

      {/* Rule: No Pets Allowed */}
      <div style={styles.rule} className="description-font">
        <PetsRoundedIcon style={styles.icon} className="icon-font"/>
        We love animals, but unfortunately, pets are not allowed in the property.
      </div>

      {/* Rule: Quiet Hours */}
      <div style={styles.rule} className="description-font">
        <VolumeOffRoundedIcon style={styles.icon} className="icon-font"/>
        Please respect quiet hours from 11 PM to 8 AM.
      </div>

      {/* Rule: No Parties or Events */}
      <div style={styles.rule} className="description-font">
        <CelebrationRoundedIcon style={styles.icon} className="icon-font"/>
        Our property is not suitable for parties or large events. Please respect our policy.
      </div>

      {/* Rule: Check-out Procedure */}
      <div style={styles.rule} className="description-font">
        <FlareRoundedIcon style={styles.icon} className="icon-font"/>
        Fireworks are prohibited by the HOA. This includes sparklers.
      </div>

      <div style={styles.rule} className="description-font">
        <DeleteRoundedIcon style={styles.icon} className="icon-font" />
        Due to wild life, please do not leave trash outside.
      </div>

      <div style={styles.footer} className="description-font">
        Thank you for understanding and respecting our house rules. We hope you have a wonderful stay!
      </div>
      <div style={styles.buttons} className="description-font">
      <Button startIcon={<ArrowBackRoundedIcon className="icon-font"/>} onClick={() => navigate('/')} variant="contained" color="primary" style={{ backgroundColor: '#7AC7C4'}}>Back to Home</Button>
      </div>
   
    </div>
  );
};

export default HouseRules;
