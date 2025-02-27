// app/blog/[slug]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "public/blog", `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return (
    <article className="blog-post">
      <h1>{data.title}</h1>
      <p><strong>{data.date} - {data.author || "Unknown"}</strong></p>
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}