import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import '../../style/Header.css';
import FamBnbLogo from '../../photos/general/fambnb.png';
import Button from '@mui/material/Button';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

function Header() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/bishop/digitalguidebook');

  }
  const location = useLocation();
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* TEMPORARY */}

      {location.pathname.includes('/form') ? 

      <AppBar component="nav" className="bar">
        <Toolbar className="toolbar">
          <img onClick={()=> navigate('/')} className="logo" src={FamBnbLogo} alt="logo" />
        </Toolbar>
      </AppBar> :
      <AppBar component="nav" className="bar">
        <Toolbar className="toolbar">
          <img onClick={handleLogoClick} className="logo" src={FamBnbLogo} alt="logo" />
          {location.pathname !== '/bishop/digitalguidebook' 
           & location.pathname !== '/bishop/digitalguidebook' ?  <Button startIcon={<ArrowBackRoundedIcon className="icon-header" />} className="back-button" onClick={() => navigate('/bishop/digitalguidebook')} variant="contained" color="primary"  /> : null
          }
        
        </Toolbar>
      </AppBar>
      }


     
      <nav>
      </nav>
    </Box>
  );
}

export default Header;