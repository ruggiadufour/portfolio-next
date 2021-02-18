import Section from "../../Components/Atomic/Section";
import Head from "next/head";
import Image from "next/image";

export default function SportClub() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/images/favicon.svg" />
        <meta
          name="description"
          content="Description of the problematic of the development of a web-site for requesting and publishing home services."
        />
        <meta
          name="keywords"
          content="Servia, Servicios, domésticos, Roque Saenz Peña, Solis Chorvat, Ruggia Dufour"
        />
        <meta
          name="author"
          content="Angel Ruggia Dufour, Ferran Solis Chorvat"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Servia: Find your ideal service</title>
      </Head>
      <Section>
        <div className="center">
          <h1 className="is-size-2 title color-text">
            Web-app for publishing and requesting home services
          </h1>
          <div className="container-image-link">
            <div className="image-link">
              <a
                href="https://github.com/ruggiadufour/Servia-Frontend"
                target="_blanket"
              >
                <Image
                  src="/images/orange-github.png"
                  layout="intrinsic"
                  width={35}
                  height={35}
                />
              </a>
            </div>
            <div className="image-link">
              <a href="https://instyc.github.io/App-Servicios/" target="_blanket">
                <Image
                  src="/images/goto.png"
                  layout="intrinsic"
                  width={35}
                  height={35}
                />
              </a>
            </div>
          </div>

          <p className="is-size-4 subtitle color-text-3">
            The final project for my university degree in system analyst. It was
            developed by me and my colleague Ferrán Solís Chorvat. Our plan was
            to start a startup, but now the project is in standby due lack of
            time.
          </p>

          <hr className="background-color2" />

          <h2 className="is-size-3 subtitle color-text-2">Problem:</h2>
          <p className="is-size-4 subtitle color-text-3">
            Due the lack of security there is in the city where I´m living
            (Presidencia Roque Saenz Peña), even more when someone want to hire
            other people for a home service, that person has to allow to come
            house to a stranger and trust him blindly.
            <br />
            Besides the previous problem, we noticed that in this city people
            only use Facebook or WhatsApp groups to hire services, which are
            terrible to filter and search specific topics. That's why we thought
            an app for this would be a success here.
          </p>

          <h2 className="is-size-3 subtitle color-text-2">Solution:</h2>
          <p className="is-size-4 subtitle color-text-3">
            It would be the best if it was a mobile application, but none of us
            had knowledge mobile application development, but we did have in web
            development. So we thought we could make a progressive web-app, and
            that is good because we would have to maintain one app that will be
            running on every operating system.
            <br />
            We decided to develop with React.js, Material-UI for front-end and
            Strapi for back-end.
          </p>

          <h2 className="is-size-3 subtitle color-text-2">Result:</h2>
          <p className="is-size-4 subtitle color-text-3">
            When we started developing the app, currently we were attending
            classes at university, so we spent little time to the develop,
            that's why this took us around 2 months to finish.
          </p>
          <Image
            src="/images/servia.png"
            layout="intrinsic"
            width={1200}
            height={600}
          />
          <Image
            src="/images/servia4.png"
            layout="intrinsic"
            width={1200}
            height={600}
          />
          <Image
            src="/images/servia2.png"
            layout="intrinsic"
            width={1200}
            height={600}
          />
          <Image
            src="/images/servia3.png"
            layout="intrinsic"
            width={1200}
            height={600}
          />
          <hr className="background-color2" />
          <h2 className="is-size-3 subtitle color-text-2">Next:</h2>
          <p className="is-size-4 subtitle color-text-3">
            As I said the project is in standby, so I hope soon I will continue
            with it, I believe there some things we harcoded and I want to
            refactor them. And also I want to migrate to Next.js for SEO stuff,
            and when I do all that I will deploy and advertise it in my city.
          </p>
        </div>
      </Section>

      <style jsx>{`
        .container-image-link {
          display: flex;
          justify-content: center;
        }
        .image-link {
          margin: 5px;
          display: inline;
        }
        .center {
          margin: auto;
          max-width: 800px;
          margin-top: 60px;
        }
        p {
          text-align: justify;
        }
      `}</style>
    </>
  );
}
