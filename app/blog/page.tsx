/**
 * page.tsx (Blog Page)
 * -------------------
 * - Uses Next.js **Server Component** to fetch full blog content.
 * - Reads Markdown files from `public/blog/` and extracts metadata + full content.
 * - Passes the entire blog content to `BlogClient.tsx` for rendering.
 * - Uses **consistent gradient background (Purple)**.
 * - Fully responsive with structured spacing, shadows, and rounded corners.
 */

import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import BlogClient from './BlogClient';

type Post = {
  slug: string;
  title: string;
  date: string;
  author: string;
  content: string;
};

// ✅ Fetch Markdown Blog Posts
async function getBlogPosts(): Promise<Post[]> {
  const blogDir = path.join(process.cwd(), 'public/blog');
  const filenames = fs.readdirSync(blogDir);

  return filenames
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const filePath = path.join(blogDir, file);
      const fileContents = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContents);

      return {
        slug: file.replace('.md', ''),
        title: data.title || 'Untitled',
        date: data.date || 'Unknown Date',
        author: data.author || 'Unknown Author',
        content, // ✅ Full markdown content
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// ✅ Fetch Blog Posts and Pass to BlogClient
export default async function BlogPage() {
  const posts = await getBlogPosts();
  return <BlogClient posts={posts} />;
}
