import { Box, Link, Typography } from '@mui/material';

const NotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        gap: '32px',
        padding: '20px',
      }}
    >
      <Typography variant="h1">Oh no, you&apos;re lost :(</Typography>
      <Link href="/">Go back home</Link>
    </Box>
  );
};

export default NotFound;
