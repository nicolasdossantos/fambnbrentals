import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import NewReleasesRoundedIcon from '@mui/icons-material/NewReleasesRounded';

const Welcome = () => {
    const navigate = useNavigate();
    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            padding: '20px',
            maxWidth: '500px',
            margin: 'auto',
        },
        header: {
            backgroundColor: '#A9CCE3',
            padding: '10px 15px',
            borderRadius: '5px',
            fontSize: '20px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
        },
        alert: {
            backgroundColor: '#FFF4E5',
            padding: '20px',
            fontWeight: 'bold',
            borderRadius: '5px',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
        },
        section: {
            marginBottom: '20px',
            padding: '10px',
            border: '1px solid #e0e0e0',
            borderRadius: '5px',
        },
        icon: {
            marginRight: '5px',
        },
        buttons: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>A Heartfelt Welcome to Our Home!</div>
            <div style={styles.section}>
                We're a close-knit family of four cousins, stepping into the world of short-term rentals. This isn't just a business for us; it's a passion. We've poured our hearts into creating a space that feels like home for every guest.
            </div>
            <div style={styles.alert}>
                <NewReleasesRoundedIcon style={styles.icon} />
                Our goal is to make your stay perfect. If there's even a slight hiccup, don't hesitate to let us know. We're committed to turning it around, because your comfort matters deeply to us.
            </div>
            <div style={styles.section}>
                We cherish every moment we get to host wonderful guests like you. We're excited and grateful for the chance to make your stay memorable!
            </div>
            <div style={styles.buttons}>
                <Button
                    startIcon={<ArrowBackRoundedIcon />}
                    onClick={() => navigate('/')}
                    variant="contained"
                    color="primary"
                    style={{backgroundColor: '#7AC7C4'}}
                >
                    Back to Home
                </Button>
            </div>
        </div>
    );
};

export default Welcome;
