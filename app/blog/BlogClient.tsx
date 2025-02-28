"use client";

import styled from "styled-components";
import ReactMarkdown from "react-markdown";

type Post = {
  slug: string;
  title: string;
  date: string;
  author: string;
  content: string;
};

type BlogClientProps = {
  posts: Post[];
};

/** 
 * Main container for the blog page. 
 * We keep a max-width for better readability on larger screens.
 */
const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

/**
 * A simple vertical layout for posts, 
 * stacking each post card on top of the other.
 */
const BlogList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem; /* spacing between posts */
`;

/**
 * A card-style container for each blog post.
 */
const BlogCard = styled.article`
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  padding: 1.5rem;

  h2 {
    margin-bottom: 0.5rem;
  }

  .post-meta {
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 1rem;
  }

  /* Basic markdown styling */
  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }
  ul, ol {
    margin-bottom: 1rem;
    margin-left: 1.5rem;
  }
  code {
    background: #f3f4f6;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
  }
`;

export default function BlogClient({ posts }: BlogClientProps) {
  return (
    <BlogContainer>
      <h1>My Blog</h1>
      <BlogList>
        {posts.map(({ slug, title, date, author, content }) => (
          <BlogCard key={slug}>
            <h2>{title}</h2>
            <div className="post-meta">
              {date} — {author}
            </div>
            <ReactMarkdown>{content}</ReactMarkdown>
          </BlogCard>
        ))}
      </BlogList>
    </BlogContainer>
  );
}
