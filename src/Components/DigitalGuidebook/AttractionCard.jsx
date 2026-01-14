import React from 'react';
import { Rating } from '@mui/material';
import DirectionsRoundedIcon from '@mui/icons-material/DirectionsRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';

function AttractionCard(props) {
  const { image, name, rating, distance, description, typeIcon } = props;

  const defaultStartAddress = '194 Bishop Circle, Albrightsville, PA 18210';

  const getDirections = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${encodeURIComponent(name)}`;
          window.open(directionsUrl, '_blank');
        },
        () => {
          const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(defaultStartAddress)}&destination=${encodeURIComponent(name)}`;
          window.open(directionsUrl, '_blank');
        }
      );
    } else {
      const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(defaultStartAddress)}&destination=${encodeURIComponent(name)}`;
      window.open(directionsUrl, '_blank');
    }
  };

  const styles = {
    card: {
      background: 'white',
      borderRadius: '14px',
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
      border: '1px solid rgba(0, 0, 0, 0.06)',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    },
    imageContainer: {
      position: 'relative',
      width: '100%',
    },
    image: {
      width: '100%',
      height: 'auto',
      display: 'block',
    },
    distanceBadge: {
      position: 'absolute',
      bottom: '10px',
      right: '10px',
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(8px)',
      padding: '6px 10px',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      fontSize: '12px',
      fontWeight: '600',
      color: '#2D3748',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    },
    distanceIcon: {
      fontSize: '14px',
      color: '#7AC7C4',
    },
    content: {
      padding: '14px 16px',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '8px',
    },
    name: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#2D3748',
      margin: 0,
      flex: 1,
      paddingRight: '8px',
    },
    iconWrapper: {
      flexShrink: 0,
    },
    ratingRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      marginBottom: '10px',
    },
    ratingText: {
      fontSize: '13px',
      color: '#718096',
      fontWeight: '500',
    },
    description: {
      fontSize: '14px',
      color: '#718096',
      lineHeight: '1.5',
      margin: 0,
    },
    directionsButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '6px',
      width: '100%',
      padding: '12px',
      marginTop: '12px',
      background: 'linear-gradient(135deg, #7AC7C4 0%, #5BB5B2 100%)',
      border: 'none',
      borderRadius: '10px',
      color: 'white',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      boxShadow: '0 2px 8px rgba(122, 199, 196, 0.3)',
    },
  };

  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img src={image} alt={name} style={styles.image} />
        <div style={styles.distanceBadge}>
          <PlaceRoundedIcon style={styles.distanceIcon} />
          {distance} mi
        </div>
      </div>
      
      <div style={styles.content}>
        <div style={styles.header}>
          <h4 style={styles.name}>{name}</h4>
          <div style={styles.iconWrapper}>{typeIcon}</div>
        </div>
        
        <div style={styles.ratingRow}>
          <Rating 
            value={rating} 
            readOnly 
            size="small" 
            precision={0.5}
          />
          <span style={styles.ratingText}>{rating}</span>
        </div>
        
        <p style={styles.description}>{description}</p>
        
        <button style={styles.directionsButton} onClick={getDirections}>
          <DirectionsRoundedIcon style={{ fontSize: '18px' }} />
          Get Directions
        </button>
      </div>
    </div>
  );
}

export default AttractionCard;
