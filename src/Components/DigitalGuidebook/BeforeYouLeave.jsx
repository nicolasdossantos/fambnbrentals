import React from 'react';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import Button from '@mui/material/Button';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { useNavigate } from 'react-router-dom';


const BeforeYouLeave = ({isMobile=true}) => {
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
        Before You Leave
      </div>
      {/* Rule: No Pets Allowed */}
      <div style={styles.rule} className="description-font">
        <DoneRoundedIcon style={styles.icon} className="icon-font"/>
        Lock doors.
      </div>
      <div style={styles.rule} className="description-font">
        <DoneRoundedIcon style={styles.icon} className="icon-font"/>
       Turn off lights.
      </div>
      <div style={styles.rule} className="description-font">
        <DoneRoundedIcon style={styles.icon} className="icon-font"/>
       Cover hot tub, fire pit & grill.
      </div>
      <div style={styles.rule} className="description-font">
        <DoneRoundedIcon style={styles.icon} className="icon-font"/>
       Load and run dishwasher.
      </div>

      {/* Rule: Quiet Hours */}
      <div style={styles.rule} className="description-font">
        <DoneRoundedIcon style={styles.icon} className="icon-font"/>
       Leave used beds un-made.
      </div>

      {/* Rule: No Parties or Events */}
      <div style={styles.rule} className="description-font">
        <DoneRoundedIcon style={styles.icon} className="icon-font"/>
        Set thermostats to 50 degrees.
      </div>

      {/* Rule: Check-out Procedure */}
      <div style={styles.rule} className="description-font">
        <DoneRoundedIcon style={styles.icon} className="icon-font"/>
        Bring trash to dumpsters accross the street from community office @ 44 Towamenings Trail. 
      </div>
      <div style={styles.rule} className="description-font">
        <DoneRoundedIcon style={styles.icon} className="icon-font"/>
       Leave used towels on bathroom floor. 
      </div>
      { isMobile ?
      <div style={styles.buttons}>
                <Button
                    className="description-font"
                    startIcon={<ArrowBackRoundedIcon className="icon-font" />}
                    onClick={() => navigate('/bishop/digitalguidebook')}
                    variant="contained"
                    color="primary"
                    style={{ backgroundColor: '#7AC7C4' }}
                >
                    Back to Home
                </Button>
            </div>
            : null}
   
    </div>
  );
};

export default BeforeYouLeave;
