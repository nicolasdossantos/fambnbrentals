import { Card, CardMedia, CardContent, Typography, Box, Rating } from '@mui/material';
import React from 'react';
import '../../style/AttractionCard.css';
import PropTypes from 'prop-types'; // import PropTypes

function AttractionCard(props) {
  const { image, name, rating, distance, description, typeIcon } = props;

  return (
    <Card style={{ display: 'flex', margin: '10px 0' }}>
      <CardMedia
        component="img"
        style={{ width: '170px', height: 'auto' }}
        image={image}
        alt={name}
      />
      <CardContent style={{ flex: 1, padding: '10px' }}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6">{name}</Typography>
          {typeIcon}
        </Box>
        <Box display="flex" justifyContent="space-between" className="rating-distance-box">
          <Rating
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

// PropTypes validation
AttractionCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  distance: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  typeIcon: PropTypes.element.isRequired // assuming typeIcon is always a valid React element
};

export default AttractionCard;
