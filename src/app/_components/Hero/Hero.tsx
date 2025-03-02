import { Box, Typography } from '@mui/material';
import styles from './Hero.styles';
import { TYPOGRAPHY } from '@/utils/typography';

const Hero = () => {
  return (
    <Box id="heading-subheading" sx={styles.container}>
      <Box>
        <Box sx={styles.nameContainer}>
          <Typography variant="h1" sx={styles.nameUnderline}>
            Daffa
          </Typography>
          <Typography variant="h1" sx={styles.name}>
            Fakhrizaman
          </Typography>
        </Box>
        <Box sx={styles.roleContainer}>
          <Typography sx={TYPOGRAPHY.BODY_16_BOLD}>
            Software Engineer
          </Typography>
          <Typography sx={styles.separator}>|</Typography>
          <Typography sx={TYPOGRAPHY.BODY_16_BOLD}>Byte Whisperer</Typography>
        </Box>
      </Box>

      <Box sx={styles.imageContainer}>
        <Box
          component="img"
          src="/home/hero.svg"
          alt="Daffa Line Art"
          sx={styles.heroImageDesktop}
        />
        <Box
          component="img"
          src="/home/hero_highlight.svg"
          alt="Daffa Line Art Mobile"
          sx={styles.heroImageMobile}
        />
      </Box>
    </Box>
  );
};

export default Hero;
