import { SxProps, Theme } from '@mui/material';
import { TYPOGRAPHY } from '@/utils/typography';

const styles = {
  container: {
    paddingTop: '32px',
    marginBottom: '24px',
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    justifyContent: 'space-between',
  },
  nameContainer: {
    display: 'flex',
    gap: { xs: '8px', sm: '8px' },
    flexDirection: { xs: 'column', sm: 'row' },
    alignItems: { xs: 'start', sm: 'end' },
    marginBottom: '12px',
  },
  nameUnderline: {
    ...TYPOGRAPHY.HEADING_36_1LINE,
    textDecoration: 'underline',
  },
  name: TYPOGRAPHY.HEADING_36_1LINE,
  roleContainer: {
    display: 'flex',
  },
  separator: {
    marginRight: '8px',
    marginLeft: '8px',
    ...TYPOGRAPHY.BODY_16_BOLD,
  },
  imageContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  heroImageDesktop: {
    display: { sm: 'block', xs: 'none' },
    width: 250,
    height: 300,
    '&:hover': {
      content: 'url("/home/hero_highlight.svg")',
    },
  },
  heroImageMobile: {
    width: 250,
    height: 300,
    display: { xs: 'block', sm: 'none' },
    '&:hover': {
      content: 'url("/home/hero.svg")',
    },
  },
} satisfies Record<string, SxProps<Theme>>;

export type StyleKeys = keyof typeof styles;

export default styles;
