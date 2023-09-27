import React from 'react';
import Grid from '@mui/material/Grid';
import InfoCard from './InfoCard';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import HotTubRoundedIcon from '@mui/icons-material/HotTubRounded';
import PoolRoundedIcon from '@mui/icons-material/PoolRounded';
import SelectionTiles from './SelectionTiles';
import '../../style/SelectionTile.css'

const TileGrid = () => {
    const tilesData = [
        {
            title: "Welcome",
            icon: StarRateRoundedIcon
        },
        {
            title: "Arrival Info",
            icon: KeyRoundedIcon
        },
        {
            title: "Before You Leave",
            icon: ChecklistRoundedIcon
        },
        {
            title: "House Rules",
            icon: HouseRoundedIcon
        },
        {
            title: "Amenities",
            icon: HotTubRoundedIcon
        },
        {
            title: "Towamensing Trails",
            icon: PoolRoundedIcon
        }
    ]

    return (
        <div className="grid">
            <Grid spacing={1} container>
                {tilesData.map((tile) => (
                    <Grid item xs={6}>
                        <SelectionTiles title={tile.title} icon={tile.icon} />
                    </Grid>
                ))}

            </Grid>
        </div>


    )
}

export default TileGrid;