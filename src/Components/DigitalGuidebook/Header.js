import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import '../../style/Header.css';
import FamBnbLogo from '../../photos/general/fambnb.png';

function Header() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" className="bar">
        <Toolbar>
          <img onClick={handleLogoClick} className="logo" src={FamBnbLogo} alt="logo" />
        </Toolbar>
      </AppBar>
      <nav>
      </nav>
    </Box>
  );
}

export default Header;