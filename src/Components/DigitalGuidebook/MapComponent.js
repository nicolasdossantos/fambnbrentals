// import React, { useState, useEffect } from 'react';
// import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
// import { Card, CardContent, Typography, CardActionArea, CardMedia } from '@mui/material';
// import HomeRoundedIcon from '@mui/icons-material/HomeRounded'

// const containerStyle = {
//   width: '600px',
//   height: '600px'
// };

// const centerLocation = {
//   lat: 40.99668884277344,
//   lng: -75.57828521728516
// };

// const houseSymbol = window.google && window.google.maps ? {
//   path: window.google.maps.SymbolPath.CIRCLE,
//   fillColor: 'blue',
//   fillOpacity: 0.8,
//   scale: 6,
//   strokeColor: 'blue',
//   strokeWeight: 2
// } : null;

// const MapComponent = ({ businessNames }) => {
//   const [businessData, setBusinessData] = useState([]);
//   const [selectedBusiness, setSelectedBusiness] = useState(null);

//   const getDrivingDistanceFromCenter = (destinationLocation) => {
//     // Returning a promise that resolves with the fetched distance.
//     return new Promise((resolve, reject) => {
//       if (window.google && window.google.maps) {
//         const origin = new window.google.maps.LatLng(centerLocation.lat, centerLocation.lng);
//         const destination = new window.google.maps.LatLng(destinationLocation.lat, destinationLocation.lng);
//         const service = new window.google.maps.DistanceMatrixService();
//         service.getDistanceMatrix({
//           origins: [origin],
//           destinations: [destination],
//           travelMode: 'DRIVING'
//         }, (response, status) => {
//           if (status === 'OK') {
//             const distanceInMiles = response.rows[0].elements[0].distance.value * 0.000621371;
//             resolve(distanceInMiles);
//           } else {
//             reject(new Error(status));
//           }
//         });
//       }
//     });
//   };

//   useEffect(() => {
//     if (window.google && window.google.maps) {
//       const map = new window.google.maps.Map(document.createElement('div'));
//       const service = new window.google.maps.places.PlacesService(map);

//       businessNames.forEach((name) => {
//         service.findPlaceFromQuery({
//           query: name,
//           fields: ['name', 'geometry', 'place_id', 'icon', 'rating', 'photos', 'types']
//         }, async (results, status) => {  // Note the use of async here
//           if (status === window.google.maps.places.PlacesServiceStatus.OK) {
//             // Fetching all distances first, then updating the state once.
//             const businessesWithDistance = await Promise.all(
//               results.map(async business => {
//                 const distance = await getDrivingDistanceFromCenter(business.geometry.location.toJSON());
//                 return {
//                   ...business,
//                   distance
//                 };
//               })
//             );
//             setBusinessData(prev => [...prev, ...businessesWithDistance]);
//           }
//         });
//       });
//     }
//   }, [businessNames]);

//   return (
//     <>
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={centerLocation}
//         zoom={10}
//       >
//         <Marker position={centerLocation} icon={houseSymbol} />

//         {businessData.map((business) => (
//           <Marker
//             key={business.place_id}  // Using just place_id as the key
//             position={business.geometry.location}
//             onClick={() => setSelectedBusiness(business)}
//           >
//             {selectedBusiness && selectedBusiness.place_id === business.place_id && (
//               <InfoWindow onCloseClick={() => setSelectedBusiness(null)}>
//                 <Card>
//           <CardActionArea onClick={() => console.log('Expanded view logic here')}>
//             <CardMedia
//               component="img"
//               alt={business.name}
//               height="140"
//               image={business.photos ? business.photos[0].getUrl() : ''}
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 {business.name}
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 {business.types[0]}
//               </Typography>
//               <Typography variant="body2">
//                 {business.distance.toFixed(2)} miles
//               </Typography>
//             </CardContent>
//           </CardActionArea>
//         </Card>
//               </InfoWindow>
//             )}
//           </Marker>
//         ))}
//       </GoogleMap>
//     </>
//   );
// };


// export default MapComponent;