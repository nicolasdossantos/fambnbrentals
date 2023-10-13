import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { Card, CardContent, Typography, CardActionArea, CardMedia } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'

const containerStyle = {
  width: '600px',
  height: '600px'
};

const centerLocation = {
  lat: 40.99668884277344,
  lng: -75.57828521728516
};

const houseSymbol = window.google && window.google.maps ? {
  path: window.google.maps.SymbolPath.CIRCLE,
  fillColor: 'blue',
  fillOpacity: 0.8,
  scale: 6,
  strokeColor: 'blue',
  strokeWeight: 2
} : null;

const MapComponent = ({ businessNames }) => {
  const [businessData, setBusinessData] = useState([]);
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  const getDistanceFromCenter = (location) => {
    const rad = (x) => (x * Math.PI) / 180;
    const R = 3958.8; // Radius of the Earth in miles

    const dLat = rad(location.lat - centerLocation.lat);
    const dLng = rad(location.lng - centerLocation.lng);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rad(centerLocation.lat)) * Math.cos(rad(location.lat)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distance in miles
  };

  useEffect(() => {

    if (window.google && window.google.maps) {
      console.log('Google maps loaded');
      console.log(businessNames);
      const map = new window.google.maps.Map(document.createElement('div'));
      const service = new window.google.maps.places.PlacesService(map);


      businessNames.forEach((name) => {
        service.findPlaceFromQuery({
          query: name,
          fields: ['name', 'geometry', 'place_id', 'icon', 'rating', 'photos', 'types']
        }, (results, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            const detailedBusinessData = results.map(business => ({
              ...business,
              distance: getDistanceFromCenter(business.geometry.location.toJSON())
            }));
            console.log(detailedBusinessData);
            setBusinessData(prev => [...prev, ...detailedBusinessData]);
          }
        });

      });
    }
  }, [businessNames]);
  return (

    <GoogleMap
      mapContainerStyle={containerStyle}
      center={centerLocation}
      zoom={10}
    >
      <Marker position={centerLocation} icon={houseSymbol} />

      {businessData.map((business) => (
        <Marker
          key={business.place_id + "1"}
          position={business.geometry.location}
          onClick={() => setSelectedBusiness(business)}
        >
          {selectedBusiness && selectedBusiness.place_id === business.place_id && (
            <InfoWindow onCloseClick={() => setSelectedBusiness(null)}>
              <Card>
                <CardActionArea onClick={() => console.log('Expanded view logic here')}>
                  <CardMedia
                    component="img"
                    alt={business.name}
                    height="140"
                    image={business.photos ? business.photos[0].getUrl() : ''}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {business.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {business.types[0]}
                    </Typography>
                    <Typography variant="body2">
                      {business.distance.toFixed(2)} miles
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </InfoWindow>
          )}
        </Marker>
      ))}
    </GoogleMap>)
}

export default MapComponent;