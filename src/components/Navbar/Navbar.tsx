'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation'; // Import usePathname to get current route
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
  const pathname = usePathname();
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Define routes with labels
  const navItems = [
    { label: 'Home', route: '/' },
    { label: 'Blogs', route: '/blogs' },
  ];

  const handleNavigation = (route: string) => {
    router.push(route);
  };

  return (
    <AppBar sx={styles.appbar} component="nav">
      <Toolbar sx={styles.toolbar}>
        {/* Brand Text */}
        <Typography
          onClick={() => router.push('/')}
          variant="h4"
          textTransform="none"
          sx={styles.textIcon}
        >
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
          {navItems.map(({ label, route }) => (
            <Button
              key={route}
              onClick={() => handleNavigation(route)}
              aria-label={label}
              sx={{
                color: pathname === route ? Colors.black : 'inherit',
                fontWeight: pathname === route ? 'bold' : 'normal',
                backgroundColor:
                  pathname === route ? Colors.red : 'transparent',
              }}
            >
              {label}
            </Button>
          ))}
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
          {navItems.map(({ label, route }) => (
            <ListItem key={route} disablePadding>
              <ListItemButton
                aria-label={`Go to ${label}`}
                onClick={() => handleNavigation(route)}
                sx={{
                  backgroundColor:
                    pathname === route ? Colors.red : 'transparent',
                }}
              >
                <Typography
                  sx={{
                    textTransform: 'uppercase',
                    fontWeight: pathname === route ? 'bold' : 'normal',
                  }}
                >
                  {label}
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
