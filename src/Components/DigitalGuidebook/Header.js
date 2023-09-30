import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import '../../style/Header.css';
import FamBnbLogo from '../../fambnb.png';

function Header() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" className="bar">
        <Toolbar>
          <img className="logo" src={FamBnbLogo} alt="logo" />
        </Toolbar>
      </AppBar>
      <nav>
      </nav>
    </Box>
  );
}

export default Header;