import { TYPOGRAPHY } from '@/utils/typography';
import { Box, Typography } from '@mui/material';
import React from 'react';
import styles from './Footer.styles';

const Footer = () => {
  return (
    <Box component="footer" sx={styles.container}>
      <Typography sx={TYPOGRAPHY.BODY_16_BOLD}>
        Building tech where everyone belongs. 🌏💚
      </Typography>
      <Typography sx={TYPOGRAPHY.BODY_16_MEDIUM}>
        © 2025 Daffa Fakhrizaman.
      </Typography>
    </Box>
  );
};

export default Footer;
