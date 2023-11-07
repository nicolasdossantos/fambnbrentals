import { Card, CardMedia, CardContent, Typography, Box, Rating, Icon } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import '../../style/AttractionCard.css'

function AttractionCard(props) {
  const { image, name, rating, distance, description, typeIcon } = props;

  const defaultStartAddress = '194 Bishop Circle, Albrightsville, PA 18210'; 

  const getDirections = (destination) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${encodeURIComponent(name)}`;
          window.open(directionsUrl, '_blank');
        },
        () => {
          // If user denies location access or an error occurs, use the default address
          const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(defaultStartAddress)}&destination=${encodeURIComponent(name)}`;
          window.open(directionsUrl, '_blank');
        }
      );
    } else {
      // Geolocation is not supported by this browser, use the default address
      const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(defaultStartAddress)}&destination=${encodeURIComponent(name)}`;
      window.open(directionsUrl, '_blank');
    }
  };

  return (
    <Card className="card-container">
      <CardMedia
        component="img"
        className="attraction-image"
        image={image}
        alt={name}
      />
      <CardContent style={{ flex: 1, padding: '10px' }}>
        <Box display="flex" justifyContent="space-between">
          <div className="title-font card-title">{name}</div>
          <Icon className="attraction-icon">{typeIcon}</Icon>
        </Box>
        <Box display="flex" justifyContent="space-between" className="rating-distance-box">
          <Rating
            className="rating"
            name="read-only"
            value={rating}
            readOnly
            size="small" />

          <div className="distance-font" >{distance} Miles Away</div>
        </Box>
        <div className="description-font" mt={1}>{description}</div>
        <div className="btn-container">
          <a  onClick={() => getDirections()}>Get Directions</a>
        </div>
      </CardContent>
    </Card>
  );
}
export default AttractionCard;
