import React from 'react';
import Paper from '@mui/material/Paper';

const SelectionTiles = ({ title, icon: Icon }) => {

    const handleClick = () => {
        console.log('clicked');
    }
    return (
    <div>
        <Paper elevation={3} className="tile" onClick={handleClick}>
            <Icon className="tile-icon" />
            <div className="tile-title">{title}</div>
        </Paper>
    </div>


    );

}





export default SelectionTiles;