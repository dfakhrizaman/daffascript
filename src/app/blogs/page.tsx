import Colors from '@/utils/colors';
import { Box, Chip, Link, Typography } from '@mui/material';
import React from 'react';
import blogs from '@/data/blogs.json';
import { TYPOGRAPHY } from '@/utils/typography';

const BlogsPage = () => {
  return (
    <>
      <Box component="main" sx={{ marginRight: '24px', marginLeft: '24px' }}>
        <Box
          id="heading"
          sx={{
            padding: '24px 0',
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
          }}
        >
          {blogs.map((blog, index) => (
            <Link
              sx={{
                all: 'unset',
                cursor: 'pointer',
                paddingTop: '24px',
                paddingBottom: '24px',
                borderBottom:
                  index !== blogs.length - 1
                    ? `1px solid ${Colors.gray}`
                    : null,
                ':hover': {
                  textDecoration: 'underline',
                },
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                alignItems: 'start',
              }}
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
            >
              <Typography variant="h2" sx={TYPOGRAPHY.HEADING_24_MULTILINE}>
                {blog.title}
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  ...TYPOGRAPHY.BODY_16_MEDIUM,
                  ':hover': { textDecoration: 'none' },
                }}
              >
                {blog.subtitle}
              </Typography>

              <Box sx={{ display: 'flex', gap: '8px' }}>
                {blog.tags.map((tag) => (
                  <Chip key={tag} label={tag} />
                ))}
              </Box>
            </Link>
          ))}

          <Typography textAlign="center" sx={TYPOGRAPHY.BODY_16_BOLD}>
            More to come. WIP 🔨👷‍♂️
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default BlogsPage;
