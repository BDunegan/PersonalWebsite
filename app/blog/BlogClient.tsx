/**
 * BlogClient.tsx
 * -------------------
 * - Uses a **Content Card** design with gradient background.
 * - Displays full Markdown content.
 * - No "My Blog" title for a cleaner flow.
 * - Fully responsive with structured spacing, shadows, and rounded corners.
 */

'use client';

import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

type Post = {
  slug: string;
  title: string;
  date: string;
  author: string;
  content: string;
};

interface BlogClientProps {
  posts: Post[];
}

const BlogContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90vw;
  max-width: 900px;
  padding: 3rem;
  background: linear-gradient(135deg, #8e44ad, #9B59B6); /* Same Gradient as Contact */
  border-radius: 20px;
  box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.colors.primary}; /* Eggshell */
  margin: 10vh auto;
  font-family: 'Inter', sans-serif;
`;

const BlogList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  margin-top: 1rem;
`;

const PostCard = styled.div`
  background: #F0EAD6; /* Eggshell Background */
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  text-align: left;
  color: #2c2c2c;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const PostTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const PostMeta = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 1rem;
`;

const PostContent = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  margin-top: 1rem;
`;

export default function BlogClient({ posts }: BlogClientProps) {
  return (
    <BlogContainer>
      {/* Blog Post List */}
      <BlogList>
        {posts.map(({ slug, title, date, author, content }: Post) => (
          <PostCard key={slug}>
            <PostTitle>{title}</PostTitle>
            <PostMeta>{date} — {author}</PostMeta>
            <PostContent>
              <ReactMarkdown>{content}</ReactMarkdown> {/* ✅ Full Markdown Content */}
            </PostContent>
          </PostCard>
        ))}
      </BlogList>
    </BlogContainer>
  );
}
