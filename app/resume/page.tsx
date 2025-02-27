// app/resume/page.tsx
export default function Resume() {
    return (
      <section className="resume">
        <h1>Resume</h1>

        <embed src="/resume.pdf" width="100%" height="600px" type="application/pdf" />

        <div className="projects">
          <h2>Projects</h2>
          <p>List of projects goes here.</p>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <p>List of skills goes here.</p>
        </div>
      </section>
    );
  }