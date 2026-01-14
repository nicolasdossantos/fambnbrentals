import React from 'react';

const HomeAmenityCard = ({ amenity, index = 0 }) => {
    const styles = {
        card: {
            background: 'white',
            borderRadius: '20px',
            marginBottom: '16px',
            boxShadow: '0 2px 16px rgba(0, 0, 0, 0.08)',
            border: '1px solid rgba(122, 199, 196, 0.1)',
            overflow: 'hidden',
            animation: `slideUp 0.5s ease-out ${0.05 * (index + 1)}s both`,
        },
        imageContainer: {
            width: '100%',
            lineHeight: 0,
        },
        image: {
            width: '100%',
            height: 'auto',
            display: 'block',
            borderRadius: '20px 20px 0 0',
        },
        content: {
            padding: '20px',
        },
        title: {
            fontSize: '20px',
            fontWeight: '700',
            color: '#2D3748',
            margin: '0 0 10px 0',
            letterSpacing: '-0.3px',
        },
        description: {
            fontSize: '15px',
            color: '#718096',
            lineHeight: '1.6',
            margin: 0,
        },
    };

    React.useEffect(() => {
        const styleSheet = document.createElement('style');
        styleSheet.textContent = `
            @keyframes slideUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(styleSheet);
        return () => document.head.removeChild(styleSheet);
    }, []);

    return (
        <div style={styles.card}>
            <div style={styles.imageContainer}>
                <img 
                    style={styles.image} 
                    src={amenity.picture} 
                    alt={amenity.title}
                />
            </div>
            <div style={styles.content}>
                <h3 style={styles.title}>{amenity.title}</h3>
                <p style={styles.description}>{amenity.description}</p>
            </div>
        </div>
    );
}

export default HomeAmenityCard;
