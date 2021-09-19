import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Resume.module.css";
import constants from "../../styles/constants";
import Tool from "../../Components/Resume/Tool";
import Project from "../../Components/Resume/Project";
import tools_data from "../../static_data/tools_data.json";
import projects_data from "../../static_data/projects_data.json";

export default function Resume() {
  const tools = tools_data;
  const projects = [...projects_data.primary, ...projects_data.extra];

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="images/svg/profile.svg" />
        <meta
          name="description"
          content="Know all about Angel Ruggia Dufour, here you'll find all the information about his career and life."
        />
        <meta
          name="keywords"
          content="Ruggia, Dufour, Angel, Resume, Curriculum, Vitae, Experience, Knowledge, Tools"
        />
        <meta name="author" content="Angel Ruggia Dufour" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Resume: Angel Ruggia Dufour</title>

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={`${styles.main} background-color4`}>
        <section id="glass" className={styles.glass}>
          <div className={styles.dashboard}>
            <div>
              <div className={styles.user}>
                <Image
                  src="/images/svg/profile.svg"
                  alt="profile-image"
                  width={150}
                  height={150}
                />

                <h2>Angel Ruggia Dufour</h2>
                <span className="color-text-2">
                  System Analyst - Front-end developer
                </span>
              </div>
              <div className={styles.p_info}>
                <Image
                  src="/images/loc.png"
                  width={80}
                  height={80}
                  alt="location-icon"
                />
                <p className="paragraph_info">
                  Presidencia Roque Saenz Peña - Chaco - Argentina
                </p>
              </div>
              <div className={styles.p_info}>
                <Image
                  src="/images/bd.png"
                  width={45}
                  height={45}
                  alt="birthday icon"
                />
                <p className="paragraph_info">16/05/1998</p>
              </div>
              <div className={styles.p_info}>
                <Image
                  src="/images/email.png"
                  width={80}
                  height={80}
                  alt="email icon"
                />
                <p className="paragraph_info">angelruggia@gmail.com</p>
              </div>
              <div className={styles.p_info}>
                <Image
                  src="/images/portfolio-info.png"
                  width={45}
                  height={45}
                  alt="portfolio icon"
                />
                <a href="https://angelruggia.ar" target="_blank">
                  angelruggia.ar
                </a>
              </div>
              <div className={styles.p_info}>
                <Image
                  src="/images/github-info.png"
                  width={80}
                  height={80}
                  alt="github icon"
                />
                <a href="https://github.com/ruggiadufour/" target="_blank">
                  github.com/ruggiadufour
                </a>
              </div>
              <div className={styles.p_info}>
                <Image
                  src="/images/linkedin-info.png"
                  width={45}
                  height={45}
                  alt="linkedin icon"
                />
                <a
                  href="https://www.linkedin.com/in/angel-ruggia-dufour-1608b815a/"
                  target="_blank"
                >
                  Linkedin
                </a>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.status}>
              <h1>Curriculum Vitae</h1>
            </div>

            <div className={styles.cards}>
              <div className={styles.card}>
                <h2>Abilities</h2>
                <div className={`${styles.card_info} ${styles.p_info}`}>
                  <p>
                    Requirements engineering, UML diagramming (object
                    diagram,ERD, activity diagram, etc.), Use cases, OOP,
                    database modeling.
                  </p>
                </div>
              </div>
              <hr />

              <div className={styles.card}>
                <h2>Tools</h2>
                <div className={styles.card_info}>
                  {tools.map((tool, i) => (
                    <Tool key={i} {...tool} />
                  ))}
                </div>
              </div>

              <hr />

              <div className={styles.card}>
                <h2>Projects</h2>
                <div className={styles.card_info}>
                  {projects.map((project, i) => (
                    <Project key={i} {...project} />
                  ))}
                </div>
              </div>

              <hr />

              <div className={styles.card}>
                <h2>Education</h2>

                <div className={styles.card_info}>
                  <div className={`${styles.p_info} ${styles.flex_col}`}>
                    <h3>SYSTEM ANALYST</h3>
                    <ul>
                      <li>Date: FROM 2017 TO 2020 (Finished)</li>
                      <li>
                        University: UNIVERSIDAD NACIONAL DEL CHACOAUSTRAL
                        (UNCAUS)
                      </li>
                      <li>Subjects average: 7.9 FROM 1 TO 10 POINTS SYSTEM</li>
                    </ul>
                  </div>

                  <div className={`${styles.p_info} ${styles.flex_col}`}>
                    <h3>INFORMATION SYSTEM ENGINEERING</h3>
                    <ul>
                      <li>Date: FROM 2017 TO 2021 (In progress)</li>
                      <li>
                        University: UNIVERSIDAD NACIONAL DEL CHACOAUSTRAL
                        (UNCAUS)
                      </li>
                      <li>Subjects average: 9 FROM 1 TO 10 POINTS SYSTEM</li>
                    </ul>
                  </div>

                  <div className={`${styles.p_info} ${styles.flex_col}`}>
                    <h3>English</h3>
                    <ul>
                      <li>Level: Intermediate</li>
                      <li>Institution: British Council</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        #glass {
          background: ${constants.dark_theme.colors.background4};
        }
        :global(a:visited) {
          color: ${constants.dark_theme.colors.primary};
        }
        :global(h1) {
          font-weight: 600;
          font-size: 2rem;
          opacity: 0.8;
          color: ${constants.dark_theme.colors.secondary};
        }

        :global(a, .paragraph_info) {
          font-size: 17px;
          opacity: 0.8;
          color: black;
          font-weight: 500;
          margin-left: 5px;
        }

        :global(h2) {
          font-size: 17px;
          opacity: 0.8;
          color: ${constants.dark_theme.colors.primary};
          font-weight: 500;
          margin-left: 5px;
        }

        :global(h3) {
          color: ${constants.dark_theme.colors.primary};
          font-size: 15px;
          font-weight: 500;
          opacity: 0.8;
        }
        :global(p, li) {
          text-align: justify;
          font-size: 13px;
          color: floralwhite;
          font-weight: 300;
          opacity: 0.8;
          margin-left: 5px;
        }
        hr {
          margin: 0;
          padding: 0;
          border: 1px solid ${constants.dark_theme.colors.third};
        }
      `}</style>
    </div>
  );
}
