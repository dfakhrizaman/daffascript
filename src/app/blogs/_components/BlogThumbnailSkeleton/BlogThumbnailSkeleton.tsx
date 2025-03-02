import { Box, Chip, Skeleton } from '@mui/material';
import React from 'react';

const BlogThumbnailSkeleton = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}
    >
      <Skeleton variant="text" sx={{ fontSize: 12, maxWidth: '30%' }} />
      <Skeleton variant="text" sx={{ fontSize: 36 }} />
      <Box sx={{ display: 'flex', gap: '16px' }}>
        <Chip sx={{ width: '80px' }} />
        <Chip sx={{ width: '80px' }} />
      </Box>

      <Skeleton variant="text" sx={{ fontSize: 16 }} />
      <Skeleton variant="text" sx={{ fontSize: 16 }} />
      <Skeleton variant="text" sx={{ fontSize: 16 }} />
    </Box>
  );
};

export default BlogThumbnailSkeleton;
