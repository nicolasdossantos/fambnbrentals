import React from 'react';
import Grid from '@mui/material/Grid';
import {useNavigate} from 'react-router-dom';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import HotTubRoundedIcon from '@mui/icons-material/HotTubRounded';
import PoolRoundedIcon from '@mui/icons-material/PoolRounded';
import SelectionTiles from './SelectionTiles';
import '../../style/SelectionTile.css'

const TileGrid = () => {
    const navigate = useNavigate();

    const tilesData = [
        {
            title: "Welcome",
            icon: StarRateRoundedIcon,
            onClickFunction: () => { navigate('/welcome') }
        },
        {
            title: "Arrival Info",
            icon: KeyRoundedIcon,
            onClickFunction: () => { navigate('/arrivalinfo') }
        },
        {
            title: "Before You Leave",
            icon: ChecklistRoundedIcon,
            onClickFunction: () => { navigate('/beforeyouleave') }
        },
        {
            title: "House Rules",
            icon: HouseRoundedIcon,
            onClickFunction: () => { navigate('/houserules') }
        },
        {
            title: "Amenities",
            icon: HotTubRoundedIcon,
            onClickFunction: () => { navigate('/amenities') }
        },
        {
            title: "Community",
            icon: PoolRoundedIcon,
            onClickFunction: () => { navigate('/community') }
        }
    ]

    return (
        <div className="grid">
            <Grid spacing={1} container>
                {tilesData.map((tile) => (
                    <Grid key={tile.title} item xs={6}>
                        <SelectionTiles title={tile.title} icon={tile.icon} onClickFunction={tile.onClickFunction}/>
                    </Grid>
                ))}

            </Grid>
        </div>


    )
}

export default TileGrid;