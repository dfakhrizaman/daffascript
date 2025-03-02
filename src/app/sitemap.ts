import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Define static routes
  const routes = [
    {
      url: 'https://daffascript.dev',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const, // Add 'as const' to make it a literal type
      priority: 1,
    },
    // Other static routes - add your other pages here
    {
      url: 'https://daffascript.dev/blogs',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  // Example: If you have dynamic blog posts or projects
  // const posts = await fetchBlogPosts()
  // const postEntries = posts.map(post => ({
  //   url: `https://daffascript.dev/blog/${post.slug}`,
  //   lastModified: new Date(post.updatedAt),
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.7,
  // }))

  // return [...routes, ...postEntries]
  return routes;
}
