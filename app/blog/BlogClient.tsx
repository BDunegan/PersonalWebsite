// app/blog/BlogClient.tsx
"use client";

/**
 * BlogClient
 * ----------
 * Displays a list of blog posts in responsive card layouts.
 * Uses ReactMarkdown for rendering markdown content.
 */

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

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(8)} ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  h1 {
    margin-bottom: ${({ theme }) => theme.spacing(6)};
    font-size: 1.75rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 2rem;
    }
  }
`;

const BlogList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
`;

const BlogCard = styled.article`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: ${({ theme }) => theme.spacing(4)};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing(6)};
  }

  h2 {
    margin-bottom: 0.5rem;
    font-size: 1.25rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 1.5rem;
    }
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
