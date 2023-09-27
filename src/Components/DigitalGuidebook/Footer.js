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

export default function Footer() {
  const [value, setValue] = React.useState(0);

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
        <BottomNavigationAction label="Info" icon={<InfoRoundedIcon />} />
        <BottomNavigationAction label="Things to Do" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Contact Us" icon={<CallRoundedIcon />} />
      </BottomNavigation>
    </Box>
  );


}