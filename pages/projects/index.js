import Section from "../../Components/Atomic/Section";
import Head from "next/head";
import ProjectCard from "../../Components/Projects/ProjectCard";
import projects_data from "../../static_data/projects_data.json";

export default function Projects() {
  const projects = projects_data.primary;
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="images/favicon.svg" />
        <meta
          name="description"
          content="Here you'll find all about the projects that Angel Ruggia Dufour has made and why he did them."
        />
        <meta
          name="keywords"
          content="Angel, Ruggia, Dufour, Projects, Works, Frontend, experience"
        />
        <meta name="author" content="Angel Ruggia Dufour" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Projects</title>
      </Head>

      <main>
        <Section>
          <h2 className="is-size-1 subtitle color-text">Projects</h2>
          <div className="cards">
            {
                projects.map((project,i)=>(
                    <ProjectCard key={i} {...project} />
                ))
            }
          </div>
        </Section>
      </main>
      <style jsx>{`
        .cards {
          margin-top: 40px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 15px;
        }
      `}</style>
    </>
  );
}
