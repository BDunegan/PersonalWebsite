// app/blog/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogClient from "./BlogClient";

/**
 * BlogPage
 * --------
 * Reads local .md files, extracts metadata, sorts by date, 
 * then passes data to BlogClient for rendering.
 */

export default function BlogPage() {
  const blogDir = path.join(process.cwd(), "public/blog");
  const filenames = fs.readdirSync(blogDir);

  const posts = filenames
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(blogDir, file);
      const fileContents = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContents);

      return {
        slug: file.replace(".md", ""),
        title: data.title || "Untitled",
        date: data.date || "Unknown Date",
        author: data.author || "Unknown Author",
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return <BlogClient posts={posts} />;
}
