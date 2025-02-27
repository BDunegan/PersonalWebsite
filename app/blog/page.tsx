// app/blog/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export default function Blog() {
  const postsDirectory = path.join(process.cwd(), "public/blog");
  const posts = fs.readdirSync(postsDirectory)
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);
      return {
        slug: filename.replace(".md", ""),
        title: data.title,
        date: data.date,
        author: data.author || "Unknown",
        excerpt: content.split(" ").slice(0, 20).join(" ") + "...",
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section className="blog">
      <h1>Blog</h1>
      <div className="blog-cards">
        {posts.map(({ slug, title, date, author, excerpt }) => (
          <div key={slug} className="blog-card">
            <h2><Link href={`/blog/${slug}`}>{title}</Link> <span>({date}) - {author}</span></h2>
            <ReactMarkdown>{excerpt}</ReactMarkdown>
          </div>
        ))}
      </div>
    </section>
  );
}