import React from "react";
import HomeAmenityCard from './HomeAmenityCard';
import Button from '@mui/material/Button';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

import { useNavigate } from 'react-router-dom';

const Amenities = () => {

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
        container: {
            fontFamily: 'Arial, sans-serif',
            padding: '20px',
            maxWidth: '500px',
            margin: 'auto',
          },
    };
    const amenityList = [
        {
            picture: "",
            title: "Grill",
            description:"Test Description 5"
        },
        {
            picture: "",
            title: "Hot Tub",
            description:"Test Description 1"
        },
        {
            picture: "",
            title: "Pool Table",
            description:"Test Description 2"
        },
        {
            picture: "",
            title: "Ping Pong Table",
            description:"Test Description 3"
        },
        {
            picture: "",
            title: "Foosball Table",
            description:"Test Description 4"
        },
        {
            picture: "",
            title: "Arcade Games",
            description:"Test Description 6"
        },
        {
            picture: "",
            title: "Board Games",
            description:"Test Description 7"
        },
        {
            picture: "",
            title: "Cornhole",
            description:"Test Description 8"
        }
      
    ]

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                Home Amenities
            </div>
            {amenityList.map((amenity) => (
                <HomeAmenityCard amenity={amenity}></HomeAmenityCard>
            ))}
                  <Button startIcon={<ArrowBackRoundedIcon />} onClick={() => navigate('/')} variant="contained" color="primary" style={{marginTop: '20px', backgroundColor: '#7AC7C4'}}>Back to Home</Button>

        </ div >
    );
}

export default Amenities;