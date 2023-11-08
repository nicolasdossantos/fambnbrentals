import React from "react";
import HomeAmenityCard from './HomeAmenityCard';
import Button from '@mui/material/Button';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
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

const Community = ({isMobile=true}) => {

    const navigate = useNavigate();
    const styles = {
        header: {
            backgroundColor: '#A9CCE3', // soft blue color
            padding: '1vh 2vw',
            borderRadius: '5px',
            displpay: 'flex',
            alignItems: 'center',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            marginBottom: '2vh',
            justifyContent: 'center',
        },
        alert: {
            backgroundColor: '#FFF4E5',
            padding: '2vh 4vw',
            borderRadius: '5px',
            marginBottom: '2vh',
        },
        attention: {
            color: '#F2994A'
        },
        container: {
            padding: '3vh 5vw',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
        },
        buttons: {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: '2vh',

        },
    };
    const amenityList = [
        {
            picture: LakePicture,
            title: "Lake",
            description: "Explore the serene waters of Wolf Run Lake. Dive into a refreshing swim, embark on a kayaking adventure, or unwind with some catch-and-release fishing (PA fishing license required). During the summer months, take advantage of our rentals for kayaks, pedal boats, and paddleboards to make the most of your lakeside experience."
        },
        {
            picture: BeachPicture,
            title: "Beach",
            description: "Step out of our front door and onto the sands of Towamensing Trails Beach, conveniently located just across the way. Bask in the sun and enjoy swimming in the summer months, or take a leisurely stroll along the shore any time of year — the beauty of the beach is always accessible for your enjoyment."
        },
        {
            picture: PoolPicture,
            title: "Pool",
            description: "Take a dip in the Towamensing Trails Community Pool, accessible to our guests throughout the summer. It’s an ideal spot for a refreshing swim and some fun under the sun!"
        },
        {
            picture: ClubhousePicture,
            title: "Clubhouse",
            description: "Visit the Club House for a convenient dining option right within Towamensing Trails. The restaurant welcomes guests, offering a variety of dishes to enjoy. Please note that while guests can savor the food, alcohol service is exclusive to club members."
        },
        {
            picture: VolleyballPicture,
            title: "Volleyball Court",
            description: "Enjoy a game of beach volleyball at the court located adjacent to the beach. It's a great way to have some fun in the sun and engage in some spirited competition."
        },
        // {
        //     picture: "",
        //     title: "Tennis Court",
        //     description: "Test Description 6"
        // },
        // {
        //     picture: "",
        //     title: "Basketball Court",
        //     description: "Test Description 7"
        // },
        {
            picture: PlaygroundPicture,
            title: "Playground",
            description: "Our younger guests will delight in the playground conveniently situated just across the street. It's a safe and fun space for kids to play and enjoy the outdoors."
        },
        {
            picture: BoatPicture,
            title: "Boat Rentals",
            description: "Set off on a summer adventure with our rental options for kayaks, pedal boats, and paddle boards. Available exclusively in the summer months, they're a fantastic way to explore the water and enjoy the sunshine."
        }

    ]

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                Community Amenities
            </div>
            <div style={styles.alert}>
                <div style={styles.attention} className="title-font">Attention!</div>
                <div className="description-font"> Our HOA only offers 8 wristbands for full access to the lake and pool amenities. Kindly note, anyone over the age of 5 requires a wristband and additional wristbands are NOT available for purchase. We appreciate your understanding and hope you enjoy your stay! </div>

            </div>
            {amenityList.map((amenity) => (
                <HomeAmenityCard amenity={amenity}></HomeAmenityCard>
            ))}
            {isMobile ?
            <div style={styles.buttons} className="description-font">
                <Button startIcon={<ArrowBackRoundedIcon className="icon-font" />} onClick={() => navigate('/bishop/digitalguidebook')} variant="contained" color="primary" style={{backgroundColor: '#7AC7C4' }}>Back to Home</Button>
            </div>
            : null}

        </ div >
    );
}

export default Community;