import React from 'react';
import Grid from '@mui/material/Grid';
import {useNavigate} from 'react-router-dom';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import HotTubRoundedIcon from '@mui/icons-material/HotTubRounded';
import PoolRoundedIcon from '@mui/icons-material/PoolRounded';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import SelectionTilesDesktop from './SelectionTilesDesktop';
import '../../style/SelectionTileDesktop.css';

const TileGridDesktop = () => {
    const navigate = useNavigate();

    const tilesData = [
        {
            title: "Welcome",
            icon: StarRateRoundedIcon,
            onClickFunction: () => { navigate('/bishop/digitalguidebook/welcome') }
        },
        // {
        //     title: "Arrival Info",
        //     icon: KeyRoundedIcon,
        //     onClickFunction: () => { navigate('/bishop/digitalguidebook/arrivalinfo') }
        // },
        {
            title: "Before You Leave",
            icon: ChecklistRoundedIcon,
            onClickFunction: () => { navigate('/bishop/digitalguidebook/beforeyouleave') }
        },
        {
            title: "House Rules",
            icon: HouseRoundedIcon,
            onClickFunction: () => { navigate('/bishop/digitalguidebook/houserules') }
        },
        {
            title: "Amenities",
            icon: HotTubRoundedIcon,
            onClickFunction: () => { navigate('/bishop/digitalguidebook/amenities') }
        },
        {
            title: "Community",
            icon: PoolRoundedIcon,
            onClickFunction: () => { navigate('/bishop/digitalguidebook/community') }
        },
        {
            title: "Things To Do",
            icon: LocationOnIcon,
            onClickFunction: () => { navigate('/bishop/digitalguidebook/thingstodo') }
        },
        {
            title: "Contact Us",
            icon: CallRoundedIcon,
            onClickFunction: () => { navigate('/bishop/digitalguidebook/contactus') }
        }
    ]

    return (
        <div className="grid-desktop">
            <Grid spacing={1} container>
                {tilesData.map((tile) => (
                    <Grid key={tile.title} item xs={6} md={12}>
                        <SelectionTilesDesktop title={tile.title} icon={tile.icon} onClickFunction={tile.onClickFunction}/>
                    </Grid>
                ))}

            </Grid>
        </div>


    )
}

export default TileGridDesktop;