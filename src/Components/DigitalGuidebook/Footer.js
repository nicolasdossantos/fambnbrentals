import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import '../../style/Footer.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  }

  const handleThingsToDoClick = () => {
    navigate('/thingstodo');
  }

  return (
    <Box  >
      <BottomNavigation
        className="footer"

        showLabels
        value={value}
        onChange={(event, newValue) => {
            
          setValue(newValue);
        }}
      > 
        
          <BottomNavigationAction onClick={handleHomeClick} label="Info" icon={<InfoRoundedIcon />} />
      
        
          <BottomNavigationAction onClick={handleThingsToDoClick} label="Things to Do" icon={<LocationOnIcon />} />
   
        <BottomNavigationAction label="Contact Us" icon={<CallRoundedIcon />} />
      </BottomNavigation>
    </Box>
  );


}