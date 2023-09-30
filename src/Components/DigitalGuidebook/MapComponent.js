import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';


const center = {
  lat: 40.99668884277344,
  lng: -75.57828521728516,
};

function DiscoveryMap() {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [places, setPlaces] = useState([]);
  
  useEffect(() => {
    const map = new window.google.maps.Map(document.createElement('div'));
    const service = new window.google.maps.places.PlacesService(map);

    service.nearbySearch({
      location: center,
      radius: '5000',
      type: ['restaurant', 'park'],
    }, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setPlaces(results);
      }
    });
  }, []);
  
  return (
    <GoogleMap center={center} zoom={12} mapContainerStyle={{ width: '100%', height: '100vh' }}>
      {places.map(place => (
        <Marker
          key={place.place_id}
          position={{
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          }}
          onClick={() => setSelectedPlace(place)}
        />
      ))}
      
      {selectedPlace && (
        <InfoWindow
          position={{
            lat: selectedPlace.geometry.location.lat(),
            lng: selectedPlace.geometry.location.lng(),
          }}
          onCloseClick={() => setSelectedPlace(null)}
        >
          <div>
            <h2>{selectedPlace.name}</h2>
            <p>{selectedPlace.vicinity}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

export default DiscoveryMap;