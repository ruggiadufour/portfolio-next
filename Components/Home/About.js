import styles from "../../styles/Resume.module.css";
import constants from "../../styles/constants";
import Gears from "./Gears";
import Section from "../Atomic/Section";
import tools_data from "../../static_data/tools_data.json";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  const tools = tools_data;
  return (
    <>
      <Gears />     
      <Section add_class="intro">
        <div className="flex_items is-rounded">
          <Image
            src="/images/svg/profile.svg"
            alt="Profile"
            
            width={128}
            height={128}
          />
        </div>

        <p
          className="is-size-1 subtitle has-text-centered color-text"
          id="hello"
        >
          Hello, I'm Angel and I'm front-end web developer and this is
        </p>
        <h1 className="is-size-1 subtitle has-text-centered color-text">
          My personal portfolio
        </h1>
      </Section>

      <div className="poligon_container">
        <div className="poligon1 background-color2"></div>
      </div>

      <Section add_class="info">
        <div className="about_container">
          <div>
            <h2 className="is-size-1 subtitle color-text">About me</h2>
            <p className="is-size-4 subtitle has-text-justified color-text-3">
              My name is Angel Ruggia Dufour and I am system analyst and a
              student of system engineering, living in Presidencia Roque Saenz
              Peña Chaco - Argentina. I like computing, programming and solving
              problems whether they are mathematical, logical or whatever and
              above all I like to learn new things. Right now I'm looking for a
              job as a Front-end developer or System analyst.
            </p>
          </div>

          <div className="tools">
            <h3 className="is-size-2 subtitle color-text-2">
              What do I work with?
            </h3>
            <h4 className="is-size-3 subtitle color-text-3">Web development</h4>
            <hr />
            <div className="flex_items">
              {tools.map((tool, i) => (
                <div key={i} className="item ">
                  
                  <Image
                    src={tool.src} alt={tool.alt}
                    
                    width={45}
                    height={45}
                  />
                  <p className="title is-4 color-text-3">{tool.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="tools">
            <h3 className="is-size-2 subtitle color-text-2">
              Do you want to work with me?
            </h3>
            <p className="is-size-4 subtitle color-text-3">
              Please contact me{" "}
              <Link href="/contact">
                <a><strong className="is-size-4 color-text">through.</strong></a>
              </Link>
            </p>
          </div>
        </div>
        <div className="about__img">
          <Image
            src="/images/svg/pi.svg"
            alt="background-image"
            width={400}
            height={400}
          />
        </div>
      </Section>

      <style jsx>{`
        #hello{
          z-index:100;
        }
        .tools {
          margin-top: 3rem;
          width: 100%;
          padding-left: 10px;
          border-left: solid 3px ${constants.dark_theme.colors.secondary};  
        }
        .poligon_container {
          position: relative;
          top: 0;
          left: 0;
        }
        .about_container {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          max-width: 900px;
          z-index:100;
        }
        .about__img {
          position: absolute;
          right: 0;
          bottom: -95%;
          opacity: 0.55;
          z-index:0;
        }
        .poligon1 {
          width: 100%;
          height: 200px;
          position: absolute;
          top: -70px;
          
        }
        .poligon1 {
          clip-path: polygon(
            25% 26%,
            100% 0,
            100% 60%,
            71% 44%,
            30% 53%,
            0% 60%,
            0 13%
          );
        }
      `}</style>
    </>
  );
}
