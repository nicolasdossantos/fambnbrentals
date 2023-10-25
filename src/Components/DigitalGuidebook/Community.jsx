import React from "react";
import HomeAmenityCard from './HomeAmenityCard';
import Button from '@mui/material/Button';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import FmdBadRoundedIcon from '@mui/icons-material/FmdBadRounded';
import LakePicture from '../../photos/community/lake.jpg';
import BeachPicture from '../../photos/community/beach.jpg';
import PoolPicture from '../../photos/community/pool.jpg';
import ClubhousePicture from '../../photos/community/clubhouseview.jpg';
import VolleyballPicture from '../../photos/community/volleyball.png';
// import VolleyballPicture from '../../photos/community/volleyball.jpg';
// import TennisPicture from '../../photos/community/tennis.jpg';
// import BasketballPicture from '../../photos/community/basketball.jpg';
import PlaygroundPicture from '../../photos/community/playground.jpeg';
import BoatPicture from '../../photos/community/boats.jpg';


import { useNavigate } from 'react-router-dom';

const Community = () => {

    const navigate = useNavigate();
    const styles = {
        header: {
            backgroundColor: '#A9CCE3', // soft blue color
            padding: '10px 15px',
            borderRadius: '5px',
            fontSize: '20px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
        },
        alert: {
            backgroundColor: '#FFF4E5',
            padding: '20px',
            fontWeight: 'bold',
            borderRadius: '5px',
            marginBottom: '20px',
  
          },
          attention: {
              color: '#F2994A',
              fontSize: '20px',
              fontWeight: 'bold',
          },
          container: {
            fontFamily: 'Arial, sans-serif',
            padding: '20px',
            maxWidth: '500px',
            margin: 'auto',
          },
    };
    const amenityList = [
        {
            picture: LakePicture,
            title: "Lake",
            description:"Test Description 5"
        },
        {
            picture: BeachPicture,
            title: "Beach",
            description:"Test Description 1"
        },
        {
            picture: PoolPicture,
            title: "Pool",
            description:"Test Description 2"
        },
        {
            picture: ClubhousePicture,
            title: "Clubhouse",
            description:"Test Description 3"
        },
        {
            picture: VolleyballPicture,
            title: "Volleyball Court",
            description:"Test Description 4"
        },
        {
            picture: "",
            title: "Tennis Court",
            description:"Test Description 6"
        },
        {
            picture: "",
            title: "Basketball Court",
            description:"Test Description 7"
        },
        {
            picture: PlaygroundPicture,
            title: "Playground",
            description:"Test Description 8"
        },
        {
            picture: BoatPicture,
            title: "Boat Rentals",
            description:"Test Description 9s"
        }
      
    ]

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                Community Amenities
            </div>
            <div style={styles.alert}>
                <div style={styles.attention}>Attention!</div>
                 Our HOA only offers 8 wristbands for full access to the lake and pool amenities. Kindly note, anyone over the age of 5 requires a wristband and additional wristbands are NOT available for purchase. We appreciate your understanding and hope you enjoy your stay!

            </div>
            {amenityList.map((amenity) => (
                <HomeAmenityCard amenity={amenity}></HomeAmenityCard>
            ))}
                  <Button startIcon={<ArrowBackRoundedIcon />} onClick={() => navigate('/')} variant="contained" color="primary" style={{marginTop: '20px', backgroundColor: '#7AC7C4'}}>Back to Home</Button>

        </ div >
    );
}

export default Community;