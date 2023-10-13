import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';

const BusinessCard = ({ business, distance }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card 
      onClick={() => setIsExpanded(!isExpanded)}
      style={{
        width: isExpanded ? '200px' : '150px',
        background: '#f4f4f4',
        cursor: 'pointer'
      }}
    >
      <CardContent>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <RestaurantRoundedIcon color="primary" style={{ marginRight: '8px' }} /> 
          {/* Replace with icon related to business type */}
          <Typography variant="h6">{business.name}</Typography>
        </div>
        
        {isExpanded && (
          <>
            <Typography variant="body2" color="textSecondary" component="p">
              {distance} miles from house
            </Typography>
            {/* Add reviews and hours of operation here */}
          </>
        )}
      </CardContent>
      {!isExpanded && (
        <IconButton size="small" onClick={() => setIsExpanded(true)} style={{ alignSelf: 'flex-end', marginRight: '4px' }}>
          {/* Use an icon here to indicate expandability */}
        </IconButton>
      )}
    </Card>
  );
};

export default BusinessCard;
