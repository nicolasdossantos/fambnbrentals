import React from 'react';
import SmokeFreeRoundedIcon from '@mui/icons-material/SmokeFreeRounded';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';
import PetsRoundedIcon from '@mui/icons-material/PetsRounded';
import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded';
import CelebrationRoundedIcon from '@mui/icons-material/CelebrationRounded';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import Button from '@mui/material/Button';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

import { useNavigate } from 'react-router-dom';

import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const BeforeYouLeave = () => {
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
        Before You Leave
      </div>

      {/* Rule: No Smoking */}
      <div style={styles.rule}>
        <DoneRoundedIcon alt="No Smoking" style={styles.icon} />
        Please do not smoke inside the property. Designated areas are available outside.
      </div>

      {/* Rule: No Pets Allowed */}
      <div style={styles.rule}>
        <DoneRoundedIcon style={styles.icon} />
        Lock doors.
      </div>
      <div style={styles.rule}>
        <DoneRoundedIcon style={styles.icon} />
       Turn off lights.
      </div>
      <div style={styles.rule}>
        <DoneRoundedIcon style={styles.icon} />
       Cover hot tub & fire pit.
      </div>
      <div style={styles.rule}>
        <DoneRoundedIcon style={styles.icon} />
       Load and run dishwasher.
      </div>

      {/* Rule: Quiet Hours */}
      <div style={styles.rule}>
        <DoneRoundedIcon style={styles.icon} />
       Leave used beds un-made.
      </div>

      {/* Rule: No Parties or Events */}
      <div style={styles.rule}>
        <DoneRoundedIcon style={styles.icon} />
        Set thermostats to 68 degrees.
      </div>

      {/* Rule: Check-out Procedure */}
      <div style={styles.rule}>
        <DoneRoundedIcon style={styles.icon} />
        Bring trash to dumpsters accross the street from community office @ 44 Towamenings Trail. 
      </div>
      <div style={styles.rule}>
        <DoneRoundedIcon style={styles.icon} />
       Leave used towels on bathroom floor. 
      </div>

      <div style={styles.buttons} >
      <Button startIcon={<ArrowBackRoundedIcon />} onClick={() => navigate('/')} variant="contained" color="primary" style={{marginTop: '20px', backgroundColor: '#7AC7C4'}}>Back to Home</Button>
      {/* <Button startIcon={<LogoutRoundedIcon />} onClick={() => navigate('/beforeyouleave')} variant="contained" color="primary" style={{marginTop: '20px', backgroundColor: '#7AC7C4'}}>Checkout Rules</Button> */}
      </div>
   
    </div>
  );
};

export default BeforeYouLeave;
