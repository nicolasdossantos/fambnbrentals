import React from 'react';

const HomeAmenityCard = ({ amenity }) => {
    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            padding: '20px',
            maxWidth: '500px',
            margin: 'auto',
        },

        alert: {
            backgroundColor: '#FFF4E5',
            padding: '20px',
            fontWeight: 'bold',
            borderRadius: '5px',
            marginBottom: '20px',

        },
        section: {
            marginBottom: '20px',
            padding: '10px',
            border: '1px solid #e0e0e0',
            borderRadius: '5px',
            display: 'flex',             // added this
            flexDirection: 'column',     // added this
            alignItems: 'center',
        },
        icon: {
            width: '25px',
            height: '25px',
            marginRight: '5px',
        },
        title: {
            fontSize: '20px',
            fontWeight: 'bold',
            textAlign: 'center'
        },
        footer: {
            color: '#A9CCE3',
            textAlign: 'center',
            marginTop: '20px',
        },
        buttons: {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: '20px',
        },
        images: {
            height: '300px',
            width: 'auto',
            margin: '0 auto'
        }

    };

    return (
        <div>
            <div style={styles.section}>
                <img style={styles.images} src={amenity.picture}></img>
                <div>
                    <div style={styles.title}>{amenity.title}</div>
                    <p>{amenity.description}</p>
                </div>
            </div>
        </div>
    )




}
export default HomeAmenityCard;
