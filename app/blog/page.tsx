// app/blog/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogClient from "./BlogClient"; // Client Component

export default function BlogPage() {
  // 1) Read the blog directory
  const blogDir = path.join(process.cwd(), "public/blog");
  const filenames = fs.readdirSync(blogDir);

  // 2) Parse each .md file
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
    // Optional: sort by descending date
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // 3) Pass the data to the Client Component
  return (
    <section style={{ padding: "2rem 1rem" }}>
      <BlogClient posts={posts} />
    </section>
  );
}
