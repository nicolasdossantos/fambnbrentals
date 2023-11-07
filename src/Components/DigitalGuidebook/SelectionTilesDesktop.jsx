import React from 'react';
import Paper from '@mui/material/Paper';
import '../../style/SelectionTileDesktop.css';

const SelectionTilesDesktop = ({ title, icon: Icon, onClickFunction }) => {

    const handleClick = () => {
        console.log('clicked');
    }
    return (
    <div className="tile-container-desktop">
        <div className="tile-desktop" onClick={onClickFunction}>
            <Icon className="tile-icon-desktop icon-font" />
            <div className="tile-title-desktop description-font">{title}</div>
        </div>
    </div>
    );

}





export default SelectionTilesDesktop;