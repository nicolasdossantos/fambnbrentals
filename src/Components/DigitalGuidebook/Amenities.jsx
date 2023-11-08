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

const Amenities = ({isMobile=true}) => {

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
            picture: GrillPicture,
            title: "Grill",
            description: "Enjoy our 6-burner grill with convenient electric ignition. Extra propane tanks are available on the backyard deck for your grilling needs. Kindly cover the grill after use once it has cooled down."
        },
        {
            picture: HotTubPicture,
            title: "Hot Tub",
            description: "Indulge in our comfortable 5-person hot tub — the perfect way to unwind. Please make sure to cover it after each use to maintain cleanliness and safety. Importantly, the hot tub should remain on at all times. Simply lower the temperature to 80 degrees before you leave. Enjoy your soothing retreat!"
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
            description: "Challenge your friends and family to a spirited match at our foosball table — a classic and entertaining addition to our game room that's sure to provide hours of fun."
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

    ]

    return (
        <div style={styles.container}>
            <div style={styles.header} className="title-font">
                Home Amenities
            </div>
            {amenityList.map((amenity) => (
                <HomeAmenityCard amenity={amenity}></HomeAmenityCard>
            ))}
            {isMobile ? 
                 <div style={styles.buttons} className="description-font">
                 <Button startIcon={<ArrowBackRoundedIcon className="icon-font" />} onClick={() => navigate('/bishop/digitalguidebook')} variant="contained" color="primary" style={{ marginTop: '20px', backgroundColor: '#7AC7C4' }}>Back to Home</Button>
                 {/* <Button startIcon={<LogoutRoundedIcon />} onClick={() => navigate('/beforeyouleave')} variant="contained" color="primary" style={{marginTop: '20px', backgroundColor: '#7AC7C4'}}>Checkout Rules</Button> */}
             </div>: null
        }
       

        </ div >
    );
}

export default Amenities;