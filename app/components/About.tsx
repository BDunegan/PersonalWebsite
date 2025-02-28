// app/about/page.tsx
import styled from "styled-components";

const AboutContainer = styled.section`
  padding: 2rem 1rem;
  max-width: 800px;
  margin: 0 auto;

  h1 {
    margin-bottom: 1rem;
  }
`;

export default function About() {
  return (
    <AboutContainer>
      <h1>About Me</h1>
      <p>
        This is the About Me section. Add information about your background, 
        experience, or interests here.
      </p>
    </AboutContainer>
  );
}
