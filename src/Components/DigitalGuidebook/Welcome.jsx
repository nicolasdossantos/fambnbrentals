import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import EmojiPeopleRoundedIcon from '@mui/icons-material/EmojiPeopleRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import CelebrationRoundedIcon from '@mui/icons-material/CelebrationRounded';


const Welcome = () => {
    const navigate = useNavigate();
    
    const styles = {
        container: {
            padding: '24px 20px',
            paddingBottom: '40px',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            background: 'linear-gradient(180deg, #f8fffe 0%, #ffffff 100%)',
            minHeight: '100%',
            animation: 'fadeIn 0.5s ease-out',
        },
        heroSection: {
            textAlign: 'center',
            marginBottom: '28px',
        },
        greeting: {
            fontSize: '14px',
            color: '#7AC7C4',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '8px',
        },
        title: {
            fontSize: '26px',
            fontWeight: '700',
            color: '#2D3748',
            margin: '0 0 12px 0',
            letterSpacing: '-0.5px',
            lineHeight: '1.2',
        },
        subtitle: {
            fontSize: '15px',
            color: '#718096',
            lineHeight: '1.5',
            maxWidth: '300px',
            margin: '0 auto',
        },
        card: {
            background: 'white',
            borderRadius: '16px',
            padding: '20px',
            marginBottom: '16px',
            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
            border: '1px solid rgba(122, 199, 196, 0.1)',
            animation: 'slideUp 0.5s ease-out backwards',
        },
        cardHeader: {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '12px',
        },
        cardIcon: {
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
        },
        cardTitle: {
            fontSize: '16px',
            fontWeight: '700',
            color: '#2D3748',
            margin: 0,
        },
        cardText: {
            fontSize: '15px',
            color: '#4A5568',
            lineHeight: '1.6',
            margin: 0,
        },
        highlightCard: {
            background: 'linear-gradient(135deg, #FFF9E6 0%, #FFF4D6 100%)',
            borderRadius: '16px',
            padding: '20px',
            marginBottom: '16px',
            border: '1px solid rgba(245, 189, 65, 0.2)',
            animation: 'slideUp 0.5s ease-out 0.1s backwards',
        },
        highlightIcon: {
            background: 'linear-gradient(135deg, #F5BD41 0%, #E5A731 100%)',
            color: 'white',
        },
        familyIcon: {
            background: 'linear-gradient(135deg, #7AC7C4 0%, #5BB5B2 100%)',
            color: 'white',
        },
        gratitudeIcon: {
            background: 'linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)',
            color: 'white',
        },
        signature: {
            textAlign: 'center',
            marginTop: '8px',
            marginBottom: '24px',
        },
        signatureText: {
            fontSize: '15px',
            color: '#718096',
            fontStyle: 'italic',
        },
        signatureName: {
            fontSize: '16px',
            fontWeight: '600',
            color: '#7AC7C4',
            marginTop: '4px',
        },
        buttonContainer: {
            display: 'flex',
            justifyContent: 'center',
        },
        button: {
            background: 'linear-gradient(135deg, #7AC7C4 0%, #5BB5B2 100%)',
            borderRadius: '12px',
            padding: '14px 28px',
            fontSize: '15px',
            fontWeight: '600',
            textTransform: 'none',
            boxShadow: '0 4px 15px rgba(122, 199, 196, 0.3)',
        },
    };

    // Add keyframe animations via style tag
    React.useEffect(() => {
        const styleSheet = document.createElement('style');
        styleSheet.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes slideUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(styleSheet);
        return () => document.head.removeChild(styleSheet);
    }, []);

    return (
        <div style={styles.container}>
            {/* Hero Section */}
            <div style={styles.heroSection}>
                <p style={styles.greeting}>Welcome Home</p>
                <h1 style={styles.title}>We're So Glad You're Here!</h1>
                <p style={styles.subtitle}>
                    Your comfort is our priority. Here's a little about us and what you can expect.
                </p>
            </div>

            {/* Family Story Card */}
            <div style={{...styles.card, animationDelay: '0.05s'}}>
                <div style={styles.cardHeader}>
                    <div style={{...styles.cardIcon, ...styles.familyIcon}}>
                        <EmojiPeopleRoundedIcon style={{fontSize: '22px'}} />
                    </div>
                    <h3 style={styles.cardTitle}>Meet Your Hosts</h3>
                </div>
                <p style={styles.cardText}>
                    We're four cousins who turned a shared dream into reality. Hosting isn't just what we do, it's what we love. We've put our hearts into making this space feel like a true home away from home.
                </p>
            </div>

            {/* Support Promise Card - Highlighted */}
            <div style={styles.highlightCard}>
                <div style={styles.cardHeader}>
                    <div style={{...styles.cardIcon, ...styles.highlightIcon}}>
                        <SupportAgentRoundedIcon style={{fontSize: '22px'}} />
                    </div>
                    <h3 style={styles.cardTitle}>We've Got Your Back</h3>
                </div>
                <p style={styles.cardText}>
                    Something not quite right? Let us know! We're committed to making things right, and fast. Your comfort isn't just a goal; it's our promise.
                </p>
            </div>

            {/* Gratitude Card */}
            <div style={{...styles.card, animationDelay: '0.15s'}}>
                <div style={styles.cardHeader}>
                    <div style={{...styles.cardIcon, ...styles.gratitudeIcon}}>
                        <CelebrationRoundedIcon style={{fontSize: '22px'}} />
                    </div>
                    <h3 style={styles.cardTitle}>Make It Memorable</h3>
                </div>
                <p style={styles.cardText}>
                    Whether you're here to relax, explore, or celebrate, we hope this stay becomes one of your favorite memories. Enjoy every moment!
                </p>
            </div>

            {/* Signature */}
            <div style={styles.signature}>
                <p style={styles.signatureText}>With gratitude,</p>
                <p style={styles.signatureName}>The FamBnB Family <FavoriteRoundedIcon style={{fontSize: '14px', verticalAlign: 'middle', marginLeft: '4px'}} /></p>
            </div>

            {/* Back Button */}
            <div style={styles.buttonContainer}>
                <Button
                    startIcon={<ArrowBackRoundedIcon />}
                    onClick={() => navigate('/bishop/digitalguidebook')}
                    variant="contained"
                    style={styles.button}
                >
                    Back to Home
                </Button>
            </div>
        </div>
    );
};



export default Welcome;
