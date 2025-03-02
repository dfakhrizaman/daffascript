import Colors from '@/utils/colors';
import { SxProps, Theme } from '@mui/material';

const styles = {
  container: {
    borderTop: `1px solid ${Colors.black}`,
    marginTop: '32px',
    padding: { sm: '32px 0px', xs: '32px 16px' },
    display: 'flex',
    flexDirection: { sm: 'row', xs: 'column' },
    gap: '16px',
    justifyContent: 'space-between',
  },
} satisfies Record<string, SxProps<Theme>>;

export type StyleKeys = keyof typeof styles;

export default styles;
