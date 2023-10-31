import { Card, CardMedia, CardContent, Typography, Box, Rating, Icon } from '@mui/material';
import React from 'react';
import '../../style/AttractionCard.css'

function AttractionCard(props) {
  const { image, name, rating, distance, description, typeIcon } = props;

  return (
    <Card style={{ display: 'flex', margin: '10px 0' }}>
      <CardMedia
        component="img"
        style={{ width: '35%', height: 'auto' }}
        image={image}
        alt={name}
      />
      <CardContent style={{ flex: 1, padding: '10px' }}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6">{name}</Typography>
          <Icon className="attraction-icon">{typeIcon}</Icon>
        </Box>
        <Box display="flex" justifyContent="space-between" className="rating-distance-box">
          <Rating
            className="rating"
            name="read-only"
            value={rating}
            readOnly
            size="small" />

          <Typography variant="body2" style={{ marginLeft: '8px' }}>{distance} Miles Away</Typography>
        </Box>
        <Typography variant="body2" mt={1}>{description}</Typography>
      </CardContent>
    </Card>
  );
}
export default AttractionCard;
