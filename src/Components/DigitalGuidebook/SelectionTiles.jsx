import React from 'react';
import Paper from '@mui/material/Paper';

const SelectionTiles = ({ title, icon: Icon, onClickFunction }) => {

    const handleClick = () => {
        console.log('clicked');
    }
    return (
    <div>
        <Paper elevation={3} className="tile" onClick={onClickFunction}>
            <Icon className="tile-icon" />
            <div className="tile-title">{title}</div>
        </Paper>
    </div>


    );

}





export default SelectionTiles;