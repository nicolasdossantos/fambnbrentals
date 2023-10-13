import React from 'react';
import SmokeFreeRoundedIcon from '@mui/icons-material/SmokeFreeRounded';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';
import PetsRoundedIcon from '@mui/icons-material/PetsRounded';
import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded';
import CelebrationRoundedIcon from '@mui/icons-material/CelebrationRounded';
import FlareRoundedIcon from '@mui/icons-material/FlareRounded';
import Button from '@mui/material/Button';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

import { useNavigate } from 'react-router-dom';

import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const HouseRules = () => {
    const navigate = useNavigate();
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      maxWidth: '500px',
      margin: 'auto',
    },
    header: {
      backgroundColor: '#A9CCE3', // soft blue color
      padding: '10px 15px',
      borderRadius: '5px',
      fontSize: '20px',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
    },
    rule: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
      padding: '10px',
      border: '1px solid #e0e0e0',
      borderRadius: '5px',
    },
    icon: {
      width: '30px',
      height: '30px',
      marginRight: '15px',

    },
    footer: {
      color: '#A9CCE3',
      textAlign: 'center',
      marginTop: '20px',
    },
    buttons : {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '20px',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        {/* Placeholder for the icon */}
        <ChecklistRoundedIcon style={styles.icon} />
        House Rules
      </div>

      {/* Rule: No Smoking */}
      <div style={styles.rule}>
        <SmokeFreeRoundedIcon alt="No Smoking" style={styles.icon} />
        Please do not smoke inside the property. Designated areas are available outside.
      </div>

      {/* Rule: No Pets Allowed */}
      <div style={styles.rule}>
        <PetsRoundedIcon style={styles.icon} />
        We love animals, but unfortunately, pets are not allowed in the property.
      </div>

      {/* Rule: Quiet Hours */}
      <div style={styles.rule}>
        <VolumeOffRoundedIcon style={styles.icon} />
        Please respect quiet hours from 10 PM to 7 AM.
      </div>

      {/* Rule: No Parties or Events */}
      <div style={styles.rule}>
        <CelebrationRoundedIcon style={styles.icon} />
        Our property is not suitable for parties or large events. Please respect our policy.
      </div>

      {/* Rule: Check-out Procedure */}
      <div style={styles.rule}>
        <FlareRoundedIcon style={styles.icon} />
        Fireworks are prohibited by the HOA. This includes sparklers.
      </div>

      <div style={styles.footer}>
        Thank you for understanding and respecting our house rules. We hope you have a wonderful stay!
      </div>
      <div style={styles.buttons} >
      <Button startIcon={<ArrowBackRoundedIcon />} onClick={() => navigate('/')} variant="contained" color="primary" style={{marginTop: '20px', backgroundColor: '#7AC7C4'}}>Back to Home</Button>
      {/* <Button startIcon={<LogoutRoundedIcon />} onClick={() => navigate('/beforeyouleave')} variant="contained" color="primary" style={{marginTop: '20px', backgroundColor: '#7AC7C4'}}>Checkout Rules</Button> */}
      </div>
   
    </div>
  );
};

export default HouseRules;
