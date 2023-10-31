import { Card, CardMedia, CardContent, Typography, Box, Rating, Icon } from '@mui/material';
import React from 'react';
import '../../style/AttractionCard.css'

function AttractionCard(props) {
  const { image, name, rating, distance, description, typeIcon } = props;

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
      </CardContent>
    </Card>
  );
}
export default AttractionCard;
