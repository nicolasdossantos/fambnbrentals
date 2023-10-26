import React from 'react';

const HomeAmenityCard = ({ amenity }) => {
    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            padding: '20px',
            maxWidth: '500px',
            margin: 'auto',
        },
        section: {
            marginBottom: '20px',
            padding: '10px',
            border: '1px solid #e0e0e0',
            borderRadius: '5px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        title: {
            fontSize: '20px',
            fontWeight: 'bold',
            textAlign: 'center'
        },
        images: {
            width: '100%',
            margin: '0 auto',
            objectFit: 'cover', // Adjusts image to fit the container
        }
    };

    const placeholderImage = '/path/to/placeholder.jpg'; // Replace with your placeholder image path

    return (
        <section style={styles.container}>
            <div style={styles.section}>
                <img
                    style={styles.images}
                    src={amenity.picture || placeholderImage}
                    alt={amenity.title || 'Amenity Image'}
                />
                <div>
                    <header style={styles.title}>{amenity.title}</header>
                    <p>{amenity.description}</p>
                </div>
            </div>
        </section>
    )
}

export default HomeAmenityCard;
