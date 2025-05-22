import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import blogs from '@/data/blogs.json';
import { remark } from 'remark';
import html from 'remark-html';
import { Box, Typography } from '@mui/material';
import remarkGfm from 'remark-gfm';

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

async function getBlogContent(slug: string) {
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return null;

  const filePath = path.join(process.cwd(), 'src/posts', blog.content);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const processedContent = await remark()
    .use(html)
    .use(remarkGfm)
    .process(fileContent);
  const contentHtml = processedContent.toString();

  return { ...blog, content: contentHtml };
}

export default async function BlogPage(props: { params: Params }) {
  const params = await props.params;
  const blog = await getBlogContent(params.slug);
  if (!blog) return notFound();

  return (
    <Box
      sx={{
        marginTop: '32px',
        paddingRight: '16px',
        paddingLeft: '16px',
        '& table': {
          borderCollapse: 'collapse',
          width: '100%',
        },
        '& th, & td': {
          border: '1px solid #ccc',
          padding: '8px',
          textAlign: 'left',
        },
        '& pre': {
          backgroundColor: '#1e1e1e', // Dark background
          color: '#f8f8f2', // Light text
          padding: '12px',
          borderRadius: '6px',
          overflowX: 'auto',
          fontSize: '0.9rem',
        },
        '& code': {
          fontFamily: 'monospace',
          backgroundColor: '#2d2d2d',
          color: '#f8f8f2',
          padding: '2px 4px',
          borderRadius: '4px',
        },
        '& pre code': {
          backgroundColor: 'transparent', // Avoid double background
          padding: 0,
        },
      }}
    >
      <Typography>{blog.lastUpdated}</Typography>
      <Typography>
        <strong>Tags:</strong> {blog.tags.join(', ')}
      </Typography>
      <Box dangerouslySetInnerHTML={{ __html: blog.content }} />
    </Box>
  );
}
