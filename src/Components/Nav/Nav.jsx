// components/Menu.jsx

import {
  Drawer,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Nav.css'; // optional for styles
import { useState } from 'react';

const Nav = () => {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <>


      {/* Botón para abrir el Drawer */}
      <IconButton
        onClick={toggleDrawer(true)}
        className='open-drawer-button' 
      >
        <MenuIcon fontSize="large" />
      </IconButton>

      {/* Drawer de pantalla completa */}
      <Drawer
        anchor="top"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            zIndex: 1301, // Por encima del botón
            width: '100vw',
            height: '100vh',
            backgroundColor: '#111',
            color: 'white',
          },
        }}
      >
        {/* Botón de cierre */}
        <IconButton
          onClick={toggleDrawer(false)}
          sx={{ position: 'absolute', top: 16, right: 16, color: 'white' }}
        >
          <CloseIcon fontSize="large" />
        </IconButton>

        {/* Lista de navegación */}
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleNavigation('/')}>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleNavigation('/men')}>
                <ListItemText primary="Masculinos" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleNavigation('/female')}>
                <ListItemText primary="Femeninos" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleNavigation('/about')}>
                <ListItemText primary="Acerca" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>




    </>

  );
};

export default Nav;


// components/FullScreenDrawer.jsx


