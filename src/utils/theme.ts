'use client';

import { createTheme } from '@mui/material/styles';

// Main
// #DBE3CE
// #1B2118
// #f2f3e7

// Accents
// #CCDCB0
// #86D7A3
// #82BBF2
// #EC7E5C

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 760,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: 'var(--font-plus-jakarta-sans)',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      fontFamily: 'var(--font-lexend)',
    },
  },
  palette: {
    background: {
      default: '#DBE3CE', // Background color
      paper: '#DBE3CE', // Background for Paper components
    },
    text: {
      primary: '#1B2118', // Black equivalent for text
      secondary: '#1B2118',
    },
    primary: {
      main: '#1B2118', // Use black equivalent as the primary theme color
    },
    secondary: {
      main: '#F2F3E7', // Use white equivalent as secondary
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#DBE3CE', // AppBar background
          color: '#1B2118', // Ensure text color is black equivalent
          boxShadow: 'none', // Remove any shadow effect
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#DBE3CE', // Paper elements use the same background
          color: '#1B2118', // Ensure text is black equivalent
        },
      },
    },
  },
});

export default theme;
