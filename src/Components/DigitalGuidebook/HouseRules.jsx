import React from 'react';
import SmokeFreeRoundedIcon from '@mui/icons-material/SmokeFreeRounded';
import PetsRoundedIcon from '@mui/icons-material/PetsRounded';
import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded';
import CelebrationRoundedIcon from '@mui/icons-material/CelebrationRounded';
import FlareRoundedIcon from '@mui/icons-material/FlareRounded';
import Button from '@mui/material/Button';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

import { useNavigate } from 'react-router-dom';

const HouseRules = () => {
    const navigate = useNavigate();
    
    const rules = [
        {
            icon: SmokeFreeRoundedIcon,
            title: "No Smoking Indoors",
            description: "Please do not smoke inside the property. Designated areas are available outside.",
            color: '#EF4444',
        },
        {
            icon: PetsRoundedIcon,
            title: "No Pets",
            description: "We love animals, but unfortunately, pets are not allowed in the property.",
            color: '#8B5CF6',
        },
        {
            icon: VolumeOffRoundedIcon,
            title: "Quiet Hours",
            description: "Please respect quiet hours from 11 PM to 8 AM.",
            color: '#3B82F6',
        },
        {
            icon: CelebrationRoundedIcon,
            title: "No Parties or Events",
            description: "Our property is not suitable for parties or large events. Please respect our policy.",
            color: '#F59E0B',
        },
        {
            icon: FlareRoundedIcon,
            title: "No Fireworks",
            description: "Fireworks are prohibited by the HOA. This includes sparklers.",
            color: '#EC4899',
        },
        {
            icon: DeleteRoundedIcon,
            title: "Trash Guidelines",
            description: "Due to wildlife, please do not leave trash outside.",
            color: '#10B981',
        },
    ];

    const styles = {
        container: {
            padding: '24px 20px',
            paddingBottom: '40px',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            background: 'linear-gradient(180deg, #f8fffe 0%, #ffffff 100%)',
            minHeight: '100%',
            animation: 'fadeIn 0.5s ease-out',
        },
        heroSection: {
            textAlign: 'center',
            marginBottom: '24px',
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
        ruleCard: {
            display: 'flex',
            alignItems: 'flex-start',
            gap: '16px',
            background: 'white',
            borderRadius: '16px',
            padding: '18px',
            marginBottom: '12px',
            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
            border: '1px solid rgba(122, 199, 196, 0.1)',
        },
        iconContainer: {
            width: '48px',
            height: '48px',
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
        },
        ruleContent: {
            flex: 1,
        },
        ruleTitle: {
            fontSize: '16px',
            fontWeight: '700',
            color: '#2D3748',
            margin: '0 0 4px 0',
        },
        ruleDescription: {
            fontSize: '14px',
            color: '#718096',
            lineHeight: '1.5',
            margin: 0,
        },
        footer: {
            textAlign: 'center',
            marginTop: '20px',
            marginBottom: '20px',
            padding: '20px',
            background: 'linear-gradient(135deg, rgba(122, 199, 196, 0.1) 0%, rgba(122, 199, 196, 0.05) 100%)',
            borderRadius: '16px',
        },
        footerText: {
            fontSize: '15px',
            color: '#4A5568',
            lineHeight: '1.6',
            margin: 0,
        },
        heartIcon: {
            color: '#7AC7C4',
            fontSize: '16px',
            verticalAlign: 'middle',
            marginLeft: '4px',
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

    React.useEffect(() => {
        const styleSheet = document.createElement('style');
        styleSheet.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes slideUp {
                from { opacity: 0; transform: translateY(15px); }
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
                <p style={styles.greeting}>Please Note</p>
                <h1 style={styles.title}>House Rules</h1>
                <p style={styles.subtitle}>A few guidelines to ensure everyone has a great stay</p>
            </div>

            {/* Rules List */}
            {rules.map((rule, index) => {
                const IconComponent = rule.icon;
                return (
                    <div 
                        key={index} 
                        style={{
                            ...styles.ruleCard,
                            animation: `slideUp 0.4s ease-out ${0.05 * (index + 1)}s both`,
                        }}
                    >
                        <div style={{
                            ...styles.iconContainer,
                            background: `${rule.color}15`,
                        }}>
                            <IconComponent style={{ fontSize: '24px', color: rule.color }} />
                        </div>
                        <div style={styles.ruleContent}>
                            <h3 style={styles.ruleTitle}>{rule.title}</h3>
                            <p style={styles.ruleDescription}>{rule.description}</p>
                        </div>
                    </div>
                );
            })}

            {/* Footer */}
            <div style={styles.footer}>
                <p style={styles.footerText}>
                    Thank you for respecting our home. We hope you have a wonderful stay!
                    <FavoriteRoundedIcon style={styles.heartIcon} />
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

export default HouseRules;
