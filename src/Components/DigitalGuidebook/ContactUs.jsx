import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import NewReleasesRoundedIcon from '@mui/icons-material/NewReleasesRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import SmartphoneRoundedIcon from '@mui/icons-material/SmartphoneRounded';



const ContactUs = ({isMobile=true}) => {
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
        section: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginBottom: '4vh',
            padding: '2vh 4vw',
            border: '1px solid #e0e0e0',
            borderRadius: '5px',
            height: '50vh' 

        },
        icon: {
            marginRight: '5px',
            paddingTop: '5px'
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
            <div style={styles.header} className="title-font">Contact Us!</div>
            
            <div style={styles.alert}>
                <NewReleasesRoundedIcon style={styles.icon} className="icon-font"></NewReleasesRoundedIcon><div className="description-font">Our goal is to make your stay perfect. If there's even a slight hiccup, don't hesitate contact us.</div>
            </div>
            <div style={styles.section} className="description-font"> 
                <div className="title-font">You can reach us by:</div>



                <div style={{display:'flex', marginBottom:'2vh', marginTop:'2vh'}}>
                    <ChatRoundedIcon style={styles.icon} className="icon-font"/>
                    <div>Messaging us through Airbnb/VRBO chat </div>
                </div>

                <div style={{display:'flex', marginBottom:'2vh',}}>
                    <AlternateEmailRoundedIcon style={styles.icon} className="icon-font"/>
                    <div>Emailing us at: <a href="mailto:contact@fambnbrentals.com" class="contact-link">contact@fambnbrentals.com</a></div>
                </div>
                
                <div style={{display:'flex'}}>
                    <SmartphoneRoundedIcon  style={styles.icon} className="icon-font"/>
                    <div>Texting/Calling us at:</div>
                </div>
                <div style={{marginLeft: '5vw'}}>Nick: <a href="tel:+12677210098">(267) 721-0098</a></div>
                <div style={{marginLeft: '5vw'}}>Michelle: <a href="tel:+12159324398">(215) 932-4398</a></div>
                    
             
            </div>
            { isMobile ?
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
                :null }
        </div>
    );
};



export default ContactUs;
