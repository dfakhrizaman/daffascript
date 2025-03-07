import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import blogs from '@/data/blogs.json';
import { remark } from 'remark';
import html from 'remark-html';
import { Box, Typography } from '@mui/material';

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

async function getBlogContent(slug: string) {
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return null;

  const filePath = path.join(process.cwd(), 'src/posts', blog.content);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const processedContent = await remark().use(html).process(fileContent);
  const contentHtml = processedContent.toString();

  return { ...blog, content: contentHtml };
}

export default async function BlogPage(props: { params: Params }) {
  const params = await props.params;
  const blog = await getBlogContent(params.slug);
  if (!blog) return notFound();

  return (
    <Box sx={{ marginTop: '32px' }}>
      <Typography>
        <strong>Last Updated:</strong> {blog.lastUpdated}
      </Typography>
      <Typography>
        <strong>Tags:</strong> {blog.tags.join(', ')}
      </Typography>
      <Box dangerouslySetInnerHTML={{ __html: blog.content }} />
    </Box>
  );
}
