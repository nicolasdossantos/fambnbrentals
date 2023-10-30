import React from 'react';
import Paper from '@mui/material/Paper';

const SelectionTiles = ({ title, icon: Icon, onClickFunction }) => {

    const handleClick = () => {
        console.log('clicked');
    }
    return (
    <div className="tile-container">
        <Paper elevation={3}  className="tile" onClick={onClickFunction}>
            <Icon className="tile-icon icon-font" />
            <div className="tile-title description-font">{title}</div>
        </Paper>
    </div>


    );

}





export default SelectionTiles;