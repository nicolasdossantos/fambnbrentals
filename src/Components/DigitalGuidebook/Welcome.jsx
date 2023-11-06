import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import NewReleasesRoundedIcon from '@mui/icons-material/NewReleasesRounded';


const Welcome = () => {
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
            alignItems: 'center',
            marginBottom: '2vh',
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
            <div style={styles.header} className="title-font">A Heartfelt Welcome to Our Home!</div>
            <div style={styles.section} className="description-font"> We're a close-knit family of four cousins, stepping into the world of short-term rentals. This isn't just a business for us; it's a passion. We've poured our hearts into creating a space that feels like home for every guest.</div>
            <div> </div>
            <div style={styles.alert}>
                <NewReleasesRoundedIcon style={styles.icon} className="icon-font"></NewReleasesRoundedIcon><div className="description-font">Our goal is to make your stay perfect. If there's even a slight hiccup, don't hesitate to let us know. We're committed to turning it around, because your comfort matters deeply to us.</div>
            </div>
            <div style={styles.section} className="description-font"> We cherish every moment we get to host wonderful guests like you. We're excited and grateful for the chance to make your stay memorable!</div>
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
        </div>
    );
};



export default Welcome;
