import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';

const drawerWidth = 240;


function Header(props) {
  const { window } = props;

  

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            textAlign="left"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            FamBnB
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button sx={{ color: '#fff' }}>
                <ShareRoundedIcon  />
              </Button>
           
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
      </nav>
    
    </Box>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;