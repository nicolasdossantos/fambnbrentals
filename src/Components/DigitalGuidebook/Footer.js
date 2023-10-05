import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import '../../style/Footer.css'
import { useNavigate, useLocation } from 'react-router-dom';

export default function Footer() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/") {
      setValue(0);
    } else if (location.pathname === "/thingstodo") {
      setValue(1);
    } else {
      setValue(2);
    }
  }, []);

  const reservationInfo = {
    guestNames: "John & Jane Doe",
    checkInDate: "Oct 15, 2023",
    checkOutDate: "Oct 20, 2023",
    checkInTime: "3:00 PM",
    checkOutTime: "11:00 AM"
  };

  const handleHomeClick = () => {
    navigate('/');
  }

  const handleThingsToDoClick = () => {
    navigate('/thingstodo');
  }

  const handleContactUsClick = () => {
    navigate('/contactus');
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
        <BottomNavigationAction onClick={handleContactUsClick} label="Contact Us" icon={<CallRoundedIcon />} />
      </BottomNavigation>
    </Box>
  );


}