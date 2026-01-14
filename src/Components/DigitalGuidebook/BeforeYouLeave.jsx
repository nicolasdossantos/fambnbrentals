import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded';
import HotTubRoundedIcon from '@mui/icons-material/HotTubRounded';
import LocalLaundryServiceRoundedIcon from '@mui/icons-material/LocalLaundryServiceRounded';
import BedRoundedIcon from '@mui/icons-material/BedRounded';
import ThermostatRoundedIcon from '@mui/icons-material/ThermostatRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import DryCleaningRoundedIcon from '@mui/icons-material/DryCleaningRounded';
import { useNavigate } from 'react-router-dom';

const BeforeYouLeave = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.innerText = `
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            @keyframes checkIn {
                0% {
                    transform: scale(0);
                }
                50% {
                    transform: scale(1.2);
                }
                100% {
                    transform: scale(1);
                }
            }
        `;
        document.head.appendChild(styleSheet);
        return () => document.head.removeChild(styleSheet);
    }, []);

    const styles = {
        container: {
            padding: '24px 20px',
            paddingBottom: '40px',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            background: 'linear-gradient(180deg, #f8fffe 0%, #ffffff 100%)',
            minHeight: '100%',
        },
        heroSection: {
            textAlign: 'center',
            marginBottom: '24px',
            animation: 'fadeInUp 0.6s ease-out',
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
            margin: '0 0 8px 0',
            letterSpacing: '-0.5px',
        },
        subtitle: {
            fontSize: '15px',
            color: '#718096',
            lineHeight: '1.5',
        },
        checklistContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            marginBottom: '24px',
        },
        checklistItem: {
            display: 'flex',
            alignItems: 'flex-start',
            gap: '14px',
            padding: '16px',
            background: 'white',
            borderRadius: '14px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
            border: '1px solid rgba(0, 0, 0, 0.04)',
        },
        iconContainer: {
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
        },
        itemContent: {
            flex: 1,
        },
        itemTitle: {
            fontSize: '15px',
            fontWeight: '600',
            color: '#2D3748',
            margin: '0 0 4px 0',
        },
        itemDescription: {
            fontSize: '14px',
            color: '#718096',
            margin: 0,
            lineHeight: '1.4',
        },
        thankYouCard: {
            background: 'linear-gradient(135deg, #E8F8F7 0%, #D4F1EF 100%)',
            borderRadius: '16px',
            padding: '24px',
            textAlign: 'center',
            marginBottom: '24px',
            border: '1px solid rgba(122, 199, 196, 0.2)',
        },
        thankYouIcon: {
            fontSize: '48px',
            color: '#7AC7C4',
            marginBottom: '12px',
        },
        thankYouTitle: {
            fontSize: '20px',
            fontWeight: '700',
            color: '#2D3748',
            margin: '0 0 8px 0',
        },
        thankYouText: {
            fontSize: '15px',
            color: '#718096',
            margin: 0,
            lineHeight: '1.5',
        },
        buttonContainer: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '12px',
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

    const checklistItems = [
        {
            icon: <LockRoundedIcon />,
            color: '#7AC7C4',
            title: 'Lock All Doors',
            description: 'Ensure front, back, and side doors are locked',
        },
        {
            icon: <LightbulbRoundedIcon />,
            color: '#F5BD41',
            title: 'Turn Off Lights',
            description: 'Switch off all lights throughout the house',
        },
        {
            icon: <HotTubRoundedIcon />,
            color: '#7AC7C4',
            title: 'Cover Outdoor Amenities',
            description: 'Cover the hot tub, fire pit, and grill',
        },
        {
            icon: <LocalLaundryServiceRoundedIcon />,
            color: '#A78BFA',
            title: 'Run the Dishwasher',
            description: 'Load and start the dishwasher before leaving',
        },
        {
            icon: <BedRoundedIcon />,
            color: '#F87171',
            title: 'Leave Beds Unmade',
            description: 'Leave used beds unmade for our cleaning team',
        },
        {
            icon: <ThermostatRoundedIcon />,
            color: '#60A5FA',
            title: 'Set Thermostat to 60°F',
            description: 'Adjust thermostat to 60 degrees before departing',
        },
        {
            icon: <DeleteRoundedIcon />,
            color: '#4ADE80',
            title: 'Take Out Trash',
            description: 'Bring trash to the dumpsters across from the community office at 44 Towamensing Trail',
        },
        {
            icon: <DryCleaningRoundedIcon />,
            color: '#FB923C',
            title: 'Leave Used Towels',
            description: 'Place used towels on the bathroom floor',
        },
    ];

    return (
        <div style={styles.container}>
            {/* Hero Section */}
            <div style={styles.heroSection}>
                <div style={styles.greeting}>Checkout</div>
                <h1 style={styles.title}>Before You Leave</h1>
                <p style={styles.subtitle}>
                    Please complete these quick tasks to help us prepare for the next guests
                </p>
            </div>

            {/* Checklist */}
            <div style={styles.checklistContainer}>
                {checklistItems.map((item, index) => (
                    <div 
                        key={index} 
                        style={{
                            ...styles.checklistItem,
                            animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`,
                        }}
                    >
                        <div style={{
                            ...styles.iconContainer,
                            background: `${item.color}15`,
                            color: item.color,
                        }}>
                            {item.icon}
                        </div>
                        <div style={styles.itemContent}>
                            <h4 style={styles.itemTitle}>{item.title}</h4>
                            <p style={styles.itemDescription}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Thank You Card */}
            <div style={styles.thankYouCard}>
                <CheckCircleRoundedIcon style={styles.thankYouIcon} />
                <h3 style={styles.thankYouTitle}>Thank You for Staying!</h3>
                <p style={styles.thankYouText}>
                    We hope you had an amazing time at 194 Bishop. Safe travels, and we hope to host you again soon!
                </p>
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

export default BeforeYouLeave;
