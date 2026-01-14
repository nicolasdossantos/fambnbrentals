import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

const ContactUs = () => {
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
        supportCard: {
            background: 'linear-gradient(135deg, #E8F8F7 0%, #D4F1EF 100%)',
            borderRadius: '16px',
            padding: '20px',
            marginBottom: '24px',
            border: '1px solid rgba(122, 199, 196, 0.2)',
            textAlign: 'center',
        },
        supportIcon: {
            fontSize: '40px',
            color: '#7AC7C4',
            marginBottom: '8px',
        },
        supportTitle: {
            fontSize: '17px',
            fontWeight: '600',
            color: '#2D3748',
            margin: '0 0 6px 0',
        },
        supportText: {
            fontSize: '14px',
            color: '#718096',
            margin: 0,
            lineHeight: '1.5',
        },
        contactMethodsContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            marginBottom: '24px',
        },
        contactCard: {
            background: 'white',
            borderRadius: '14px',
            padding: '18px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
            border: '1px solid rgba(0, 0, 0, 0.04)',
        },
        contactHeader: {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '12px',
        },
        contactIconContainer: {
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
        },
        contactTitle: {
            fontSize: '16px',
            fontWeight: '600',
            color: '#2D3748',
            margin: 0,
        },
        contactDescription: {
            fontSize: '14px',
            color: '#718096',
            marginBottom: '12px',
            lineHeight: '1.4',
        },
        contactLink: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '10px 16px',
            borderRadius: '10px',
            fontSize: '14px',
            fontWeight: '600',
            textDecoration: 'none',
            transition: 'transform 0.2s ease',
        },
        phoneContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
        },
        phoneRow: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 14px',
            background: 'rgba(122, 199, 196, 0.08)',
            borderRadius: '10px',
        },
        phoneName: {
            fontSize: '14px',
            fontWeight: '600',
            color: '#2D3748',
        },
        phoneLink: {
            fontSize: '14px',
            fontWeight: '600',
            color: '#7AC7C4',
            textDecoration: 'none',
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

    const contactMethods = [
        {
            icon: <ChatRoundedIcon />,
            color: '#7AC7C4',
            title: 'Message Us',
            description: 'Reach out through your Airbnb or VRBO chat for quick responses',
        },
        {
            icon: <EmailRoundedIcon />,
            color: '#F5BD41',
            title: 'Email Us',
            description: 'Send us an email anytime and we will get back to you promptly',
            actionText: 'contact@fambnbrentals.com',
            actionHref: 'mailto:contact@fambnbrentals.com',
        },
        {
            icon: <PhoneRoundedIcon />,
            color: '#A78BFA',
            title: 'Call or Text',
            description: 'For urgent matters, feel free to call or text us directly',
            contacts: [
                { name: 'Nick', phone: '(267) 721-0098', href: 'tel:+12677210098' },
                { name: 'Michelle', phone: '(215) 932-4398', href: 'tel:+12159324398' },
            ],
        },
    ];

    return (
        <div style={styles.container}>
            {/* Hero Section */}
            <div style={styles.heroSection}>
                <div style={styles.greeting}>Support</div>
                <h1 style={styles.title}>Contact Us</h1>
                <p style={styles.subtitle}>
                    We are here to help make your stay perfect
                </p>
            </div>

            {/* Support Card */}
            <div style={styles.supportCard}>
                <FavoriteRoundedIcon style={styles.supportIcon} />
                <h3 style={styles.supportTitle}>Your Comfort is Our Priority</h3>
                <p style={styles.supportText}>
                    If there is even a small hiccup during your stay, please do not hesitate to reach out. We want to make it right!
                </p>
            </div>

            {/* Contact Methods */}
            <div style={styles.contactMethodsContainer}>
                {contactMethods.map((method, index) => (
                    <div 
                        key={index} 
                        style={{
                            ...styles.contactCard,
                            animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
                        }}
                    >
                        <div style={styles.contactHeader}>
                            <div style={{
                                ...styles.contactIconContainer,
                                background: `${method.color}15`,
                                color: method.color,
                            }}>
                                {method.icon}
                            </div>
                            <h4 style={styles.contactTitle}>{method.title}</h4>
                        </div>
                        <p style={styles.contactDescription}>{method.description}</p>
                        
                        {method.contacts ? (
                            <div style={styles.phoneContainer}>
                                {method.contacts.map((contact, idx) => (
                                    <div key={idx} style={styles.phoneRow}>
                                        <span style={styles.phoneName}>{contact.name}</span>
                                        <a href={contact.href} style={styles.phoneLink}>
                                            {contact.phone}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        ) : method.actionHref ? (
                            <a 
                                href={method.actionHref}
                                style={{
                                    ...styles.contactLink,
                                    background: `${method.color}15`,
                                    color: method.color,
                                }}
                            >
                                {method.actionText}
                            </a>
                        ) : null}
                    </div>
                ))}
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

export default ContactUs;
