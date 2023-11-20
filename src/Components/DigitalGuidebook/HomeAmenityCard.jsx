import React from 'react';

const HomeAmenityCard = ({ amenity }) => {
    const styles = {
        container: {
            padding: '3vh 5vw',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
        },
        section: {
            marginBottom: '2vh',
            padding: '2vh 2vw',
            border: '1px solid #e0e0e0',
            borderRadius: '5px',
            display: 'flex',             // added this
            flexDirection: 'column',     // added this
            alignItems: 'center',
        },
        icon: {
            marginRight: '0.5vw',
        },

        buttons: {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: '2vh',

        },
        title: {
            textAlign: 'center'
        },
        images: {
            width: 'auto',
            maxWidth: '100%',
            margin: '0 auto'
        }

    };

    return (
        <div>
            <div style={styles.section}>
                <img style={styles.images} src={amenity.picture}></img>
                <div>
                    <div style={styles.title} className="title-font">{amenity.title}</div>
                    <p className="description-font">{amenity.description}</p>
                </div>
            </div>
        </div>
    )




}
export default HomeAmenityCard;
