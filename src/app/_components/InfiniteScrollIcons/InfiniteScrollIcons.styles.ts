import { SxProps, Theme } from '@mui/material';

const styles = {
  container: { width: '100%', overflow: 'hidden', padding: '12px 0' },
} satisfies Record<string, SxProps<Theme>>;

export type StyleKeys = keyof typeof styles;

export default styles;
