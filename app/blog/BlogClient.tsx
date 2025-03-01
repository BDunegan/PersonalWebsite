/**
 * BlogClient.tsx
 * -------------------
 * - Uses a **Content Card** design with gradient background from the theme.
 * - Renders full Markdown content.
 * - Removed "My Blog" title for a cleaner flow, but references the theme thoroughly.
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
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.secondaryDark},
    ${({ theme }) => theme.colors.secondaryLight}
  );
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  color: ${({ theme }) => theme.colors.primary}; /* Eggshell */
  margin: 10vh auto;
`;

const BlogList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  margin-top: 1rem;
`;

const PostCard = styled.div`
  background: ${({ theme }) => theme.colors.primary}; /* Eggshell */
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.colors.textInverse};
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
      <BlogList>
        {posts.map(({ slug, title, date, author, content }: Post) => (
          <PostCard key={slug}>
            <PostTitle>{title}</PostTitle>
            <PostMeta>
              {date} — {author}
            </PostMeta>
            <PostContent>
              <ReactMarkdown>{content}</ReactMarkdown>
            </PostContent>
          </PostCard>
        ))}
      </BlogList>
    </BlogContainer>
  );
}
