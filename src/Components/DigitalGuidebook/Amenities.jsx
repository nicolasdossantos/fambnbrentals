import React from "react";
import HomeAmenityCard from './HomeAmenityCard';
import Button from '@mui/material/Button';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import GrillPicture from '../../photos/house/Grill.jpg';
import HotTubPicture from '../../photos/house/Hot tub.jpg';
import PoolTablePicture from '../../photos/house/pool table.jpg';
import PingPongTablePicture from '../../photos/house/Ping Pong.jpg';
import FoosballTablePicture from '../../photos/house/Foosball.jpg';
import ArcadeGamesPicture from '../../photos/house/Arcades.jpg';
import BoardGamesPicture from '../../photos/house/Board Games.jpg';
import CornholePicture from '../../photos/house/Cornhole.jpg';

import { useNavigate } from 'react-router-dom';

const Amenities = () => {
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
            animation: 'fadeIn 0.5s ease-out',
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
            picture: GrillPicture,
            title: "Grill",
            description: "Enjoy our 6-burner grill with convenient electric ignition. Extra propane tanks are available on the backyard deck for your grilling needs. Kindly cover the grill after use once it has cooled down."
        },
        {
            picture: HotTubPicture,
            title: "Hot Tub",
            description: "Indulge in our comfortable 5-person hot tub, the perfect way to unwind. Please make sure to cover it after each use to maintain cleanliness and safety. The hot tub should remain on at all times. Simply lower the temperature to 80 degrees before you leave."
        },
        {
            picture: PoolTablePicture,
            title: "Pool Table",
            description: "Enjoy a game of pool, ping pong, or gather around for a meal on our versatile table that easily converts to suit your needs. For instructions on how to transform it, please refer to the guide located on the game room wall."
        },
        {
            picture: PingPongTablePicture,
            title: "Ping Pong Table",
            description: "Enjoy a game of pool, ping pong, or gather around for a meal on our versatile table that easily converts to suit your needs. For instructions on how to transform it, please refer to the guide located on the game room wall."
        },
        {
            picture: FoosballTablePicture,
            title: "Foosball Table",
            description: "Challenge your friends and family to a spirited match at our foosball table, a classic and entertaining addition to our game room that's sure to provide hours of fun."
        },
        {
            picture: ArcadeGamesPicture,
            title: "Arcade Games",
            description: "Step back in time and enjoy our arcade classics! Go head-to-head in 'NBA Jam' or hit the virtual links with 'Golden Tee.' These timeless games are sure to add some retro fun to your stay!"
        },
        {
            picture: BoardGamesPicture,
            title: "Board Games",
            description: "Choose from our extensive collection of over a dozen board games for a night of strategy, skill, and laughter. Whether you're with family or friends, you'll find the perfect game to challenge and entertain everyone."
        },
        {
            picture: CornholePicture,
            title: "Cornhole",
            description: "Enjoy some classic outdoor fun with our cornhole game, conveniently located in the game room. After showing off your tossing skills, please return the game to its designated spot for the next guests to enjoy."
        }
    ];

    React.useEffect(() => {
        const styleSheet = document.createElement('style');
        styleSheet.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
        `;
        document.head.appendChild(styleSheet);
        return () => document.head.removeChild(styleSheet);
    }, []);

    return (
        <div style={styles.container}>
            {/* Hero Section */}
            <div style={styles.heroSection}>
                <p style={styles.greeting}>What We Offer</p>
                <h1 style={styles.title}>Home Amenities</h1>
                <p style={styles.subtitle}>Everything you need for an unforgettable stay</p>
            </div>

            {amenityList.map((amenity, index) => (
                <HomeAmenityCard key={amenity.title} amenity={amenity} index={index} />
            ))}

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

export default Amenities;