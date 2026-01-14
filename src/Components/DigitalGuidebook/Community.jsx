import React from "react";
import HomeAmenityCard from './HomeAmenityCard';
import Button from '@mui/material/Button';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ConfirmationNumberRoundedIcon from '@mui/icons-material/ConfirmationNumberRounded';
import LakePicture from '../../photos/community/lake.jpg';
import BeachPicture from '../../photos/community/beach.jpg';
import PoolPicture from '../../photos/community/pool.jpg';
import ClubhousePicture from '../../photos/community/clubhouseview.jpg';
import VolleyballPicture from '../../photos/community/volleyball.png';
import PlaygroundPicture from '../../photos/community/playground.jpeg';
import BoatPicture from '../../photos/community/boats.jpg';

import { useNavigate } from 'react-router-dom';

const Community = () => {
    const navigate = useNavigate();
    
    const styles = {
        container: {
            padding: '24px 20px',
            paddingBottom: '40px',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            background: 'linear-gradient(180deg, #f8fffe 0%, #ffffff 100%)',
            minHeight: '100%',
        },
        heroSection: {
            textAlign: 'center',
            marginBottom: '24px',
        },
        greeting: {
            fontSize: '14px',
            color: '#7AC7C4',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '8px',
        },
        title: {
            fontSize: '26px',
            fontWeight: '700',
            color: '#2D3748',
            margin: '0 0 8px 0',
            letterSpacing: '-0.5px',
        },
        subtitle: {
            fontSize: '15px',
            color: '#718096',
            lineHeight: '1.5',
        },
        wristbandCard: {
            background: 'linear-gradient(135deg, #FFF9E6 0%, #FFF4D6 100%)',
            borderRadius: '16px',
            padding: '20px',
            marginBottom: '24px',
            border: '1px solid rgba(245, 189, 65, 0.25)',
        },
        wristbandHeader: {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '12px',
        },
        wristbandIcon: {
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #F5BD41 0%, #E5A731 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            flexShrink: 0,
        },
        wristbandTitle: {
            fontSize: '18px',
            fontWeight: '700',
            color: '#92400E',
            margin: 0,
        },
        wristbandText: {
            fontSize: '15px',
            color: '#78350F',
            lineHeight: '1.7',
            margin: 0,
        },
        wristbandHighlight: {
            display: 'inline-block',
            background: 'rgba(245, 189, 65, 0.3)',
            padding: '2px 8px',
            borderRadius: '6px',
            fontWeight: '600',
        },
        bulletList: {
            margin: '12px 0 0 0',
            paddingLeft: '20px',
        },
        bulletItem: {
            marginBottom: '6px',
            fontSize: '15px',
            color: '#78350F',
            lineHeight: '1.5',
        },
        buttonContainer: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '12px',
        },
        button: {
            background: 'linear-gradient(135deg, #7AC7C4 0%, #5BB5B2 100%)',
            borderRadius: '12px',
            padding: '14px 28px',
            fontSize: '15px',
            fontWeight: '600',
            textTransform: 'none',
            boxShadow: '0 4px 15px rgba(122, 199, 196, 0.3)',
        },
    };

    const amenityList = [
        {
            picture: LakePicture,
            title: "Lake",
            description: "Explore the serene waters of Wolf Run Lake. Dive into a refreshing swim, embark on a kayaking adventure, or unwind with some catch-and-release fishing (PA fishing license required). During summer, rent kayaks, pedal boats, and paddleboards to make the most of your lakeside experience."
        },
        {
            picture: BeachPicture,
            title: "Beach",
            description: "Step out our front door and onto the sands of Towamensing Trails Beach, located just across the way. Bask in the sun and swim during summer months, or take a leisurely stroll along the shore any time of year."
        },
        {
            picture: PoolPicture,
            title: "Pool",
            description: "Take a dip in the Towamensing Trails Community Pool, accessible to our guests throughout the summer. It is an ideal spot for a refreshing swim and some fun under the sun!"
        },
        {
            picture: ClubhousePicture,
            title: "Clubhouse",
            description: "Visit the Club House for convenient dining right within Towamensing Trails. The restaurant welcomes guests with a variety of dishes. Please note that alcohol service is exclusive to club members."
        },
        {
            picture: VolleyballPicture,
            title: "Volleyball Court",
            description: "Enjoy a game of beach volleyball at the court located adjacent to the beach. It is a great way to have fun in the sun and engage in some spirited competition."
        },
        {
            picture: PlaygroundPicture,
            title: "Playground",
            description: "Our younger guests will delight in the playground situated just across the street. It is a safe and fun space for kids to play and enjoy the outdoors."
        },
        {
            picture: BoatPicture,
            title: "Boat Rentals",
            description: "Set off on a summer adventure with rental kayaks, pedal boats, and paddle boards. Available during summer months at the Boat Rental office near the lake."
        }
    ];

    return (
        <div style={styles.container}>
            {/* Hero Section */}
            <div style={styles.heroSection}>
                <div style={styles.greeting}>Explore</div>
                <h1 style={styles.title}>Community Amenities</h1>
                <p style={styles.subtitle}>
                    Towamensing Trails offers amazing amenities just steps from your door
                </p>
            </div>

            {/* Wristband Info Card */}
            <div style={styles.wristbandCard}>
                <div style={styles.wristbandHeader}>
                    <div style={styles.wristbandIcon}>
                        <ConfirmationNumberRoundedIcon />
                    </div>
                    <h3 style={styles.wristbandTitle}>HOA Wristbands</h3>
                </div>
                <p style={styles.wristbandText}>
                    Your stay includes <span style={styles.wristbandHighlight}>8 wristbands</span> for full access to the lake and pool amenities.
                </p>
                <ul style={styles.bulletList}>
                    <li style={styles.bulletItem}>Children under 5 do not need a wristband</li>
                    <li style={styles.bulletItem}>Additional passes: <strong>$10/person/day</strong></li>
                    <li style={styles.bulletItem}>Purchase at the Teepee or Boat Rental office</li>
                    <li style={styles.bulletItem}>Bring your rental packet and photo ID</li>
                    <li style={styles.bulletItem}>All wristband purchases are non-refundable</li>
                </ul>
            </div>

            {/* Amenity Cards */}
            {amenityList.map((amenity, index) => (
                <HomeAmenityCard key={index} amenity={amenity} />
            ))}

            {/* Back Button */}
            <div style={styles.buttonContainer}>
                <Button 
                    startIcon={<ArrowBackRoundedIcon />} 
                    onClick={() => navigate('/bishop/digitalguidebook')} 
                    variant="contained"
                    style={styles.button}
                >
                    Back to Home
                </Button>
            </div>
        </div>
    );
}

export default Community;
