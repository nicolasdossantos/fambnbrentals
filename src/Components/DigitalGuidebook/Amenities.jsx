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
            description: "Test Description 5"
        },
        {
            picture: HotTubPicture,
            title: "Hot Tub",
            description: "Test Description 1"
        },
        {
            picture: PoolTablePicture,
            title: "Pool Table",
            description: "Test Description 2"
        },
        {
            picture: PingPongTablePicture,
            title: "Ping Pong Table",
            description: "Test Description 3"
        },
        {
            picture: FoosballTablePicture,
            title: "Foosball Table",
            description: "Test Description 4"
        },
        {
            picture: ArcadeGamesPicture,
            title: "Arcade Games",
            description: "Test Description 6"
        },
        {
            picture: BoardGamesPicture,
            title: "Board Games",
            description: "Test Description 7"
        },
        {
            picture: CornholePicture,
            title: "Cornhole",
            description: "Test Description 8"
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
            <div style={styles.buttons} className="description-font">
                <Button startIcon={<ArrowBackRoundedIcon className="icon-font" />} onClick={() => navigate('/')} variant="contained" color="primary" style={{ marginTop: '20px', backgroundColor: '#7AC7C4' }}>Back to Home</Button>
                {/* <Button startIcon={<LogoutRoundedIcon />} onClick={() => navigate('/beforeyouleave')} variant="contained" color="primary" style={{marginTop: '20px', backgroundColor: '#7AC7C4'}}>Checkout Rules</Button> */}
            </div>

        </ div >
    );
}

export default Amenities;