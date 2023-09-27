import React from 'react';
import Paper from '@mui/material/Paper';

const SelectionTiles = ({ title, icon: Icon }) => {

    return (
    <div>
        <Paper elevation={3} className="tile">
            <Icon className="tile-icon" />
            <div className="tile-title">{title}</div>
        </Paper>
    </div>


    );

}





export default SelectionTiles;