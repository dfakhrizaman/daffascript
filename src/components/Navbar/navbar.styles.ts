import Colors from '@/utils/colors';
import { TYPOGRAPHY } from '@/utils/typography';
import { SxProps, Theme } from '@mui/material';

const styles = {
  container: {
    maxWidth: '768px',
    width: '100%',
    position: 'sticky',
    top: 0,
    backgroundColor: Colors.background,
    zIndex: 1000,
  },
  appbar: {
    borderBottom: `1px solid ${Colors.black}`,
    display: 'flex',
    justifyContent: 'space-between',
    alignSelf: 'center',
    position: 'sticky',
  },
  toolbar: {
    '@media (min-width: 0px)': {
      padding: 0,
      paddingLeft: { xs: '16px', sm: 0 },
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
  textIcon: {
    ...TYPOGRAPHY.SUBHEADING_18_BOLD,
    marginRight: '8px',
    cursor: 'pointer',
  },
} satisfies Record<string, SxProps<Theme>>;

export type StyleKeys = keyof typeof styles;

export default styles;
