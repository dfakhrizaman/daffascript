import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import Colors from '@/utils/colors';
import { Box, Typography } from '@mui/material';
import React from 'react';
import BlogThumbnailSkeleton from './_components/BlogThumbnailSkeleton/BlogThumbnailSkeleton';

const BlogsPage = () => {
  return (
    <Box sx={{ maxWidth: '768px', width: '100%' }}>
      <Navbar />
      <Box component="main" sx={{ marginRight: '24px', marginLeft: '24px' }}>
        <Box
          id="heading"
          sx={{
            padding: '32px 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',

            borderBottom: `1px solid ${Colors.black}`,
          }}
        >
          <Typography variant="h1">📝 Blogs</Typography>
          <Typography>
            I present to you, snippets of my thoughts. Make of them what you
            will. Hope they help. 🐸😉
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            marginTop: '24px',
          }}
        >
          <BlogThumbnailSkeleton />
          <BlogThumbnailSkeleton />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default BlogsPage;
