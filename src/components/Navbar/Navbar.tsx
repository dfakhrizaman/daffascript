'use client';

import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Box,
} from '@mui/material';
import Menu from '@mui/icons-material/Menu'; // Burger icon
import styles from './navbar.styles';
import { TYPOGRAPHY } from '@/utils/typography';
import Colors from '@/utils/colors';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar sx={styles.appbar} component="nav">
      <Toolbar sx={styles.toolbar}>
        {/* Brand Text */}
        <Typography variant="h4" textTransform="none" sx={styles.textIcon}>
          daffascript
          <Typography
            variant="h4"
            component="span"
            sx={TYPOGRAPHY.SUBHEADING_18_BOLD}
            color={Colors.red}
          >
            .dev
          </Typography>
        </Typography>

        {/* Desktop Buttons (Hidden on xs) */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
          <Button aria-label="Home">Home</Button>
          <Button aria-label="Works">Works</Button>
          <Button aria-label="Blogs">Blogs</Button>
          <Button aria-label="Contact">Contact</Button>
        </Box>

        {/* Burger Menu Button (Visible on xs) */}
        <IconButton
          aria-label="Open Navbar"
          color="inherit"
          onClick={handleDrawerToggle}
          sx={{
            display: { sm: 'none', xs: 'block' },
            width: '40px',
            height: '40px',
            marginRight: '8px',
          }}
        >
          <Menu />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer (Sidebar) */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ '& .MuiDrawer-paper': { width: 250 } }}
      >
        <List>
          {['Home', 'Works', 'Blog', 'Contact'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton aria-label={`Go to ${text}`}>
                <Typography sx={{ textTransform: 'uppercase' }}>
                  {text}
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
