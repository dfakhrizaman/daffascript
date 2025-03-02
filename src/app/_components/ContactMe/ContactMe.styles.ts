import Colors from '@/utils/colors';
import { TYPOGRAPHY } from '@/utils/typography';
import { SxProps, Theme } from '@mui/material';

const styles = {
  container: {
    marginTop: '32px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  heading: {
    ...TYPOGRAPHY.SUBHEADING_20_MULTILINE,
    paddingBottom: '16px',
    borderBottom: `1px solid ${Colors.black}`,
  },
  emailContainer: { display: 'flex', alignItems: 'center', gap: '8px' },
  textField: {
    width: `22ch`,
    minWidth: 'fit-content',
    '& .MuiInputBase-input': {
      padding: '8px',
    },
  },
  iconButton: {
    backgroundColor: Colors.lightGreen, // Default background
    padding: '10px',
    borderRadius: '8px',
    '&:hover': {
      backgroundColor: Colors.lightGreen,
    },
    '&:active': {
      backgroundColor: Colors.lightGreen,
    },
    '&:focus': {
      backgroundColor: Colors.lightGreen,
    },
  },

  otherSocials: { display: 'flex', gap: '16px' },
} satisfies Record<string, SxProps<Theme>>;

export type StyleKeys = keyof typeof styles;

export default styles;
