import Section from "../../Components/Atomic/Section";
import Head from "next/head";
import Image from "next/image";

export default function SportClub() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="images/favicon.svg" />
        <meta
          name="description"
          content="Description of the problematic of the development of a web-site for swimming pool shifts for the San Bernardo city hall."
        />
        <meta
          name="keywords"
          content="San Bernardo, Chaco, Shifts, Turnos, Complejo deportivo, Sport club, turno piletas"
        />
        <meta name="author" content="Angel Ruggia Dufour, Ferran Solis Chorvat" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Shifts of the San Bernardo sports club</title>
      </Head>
      <Section>
        <div className="center">
          <h1 className="is-size-2 title color-text">
            Sports Club shifts
          </h1>
          <hr className="background-color2" />

          <h2 className="is-size-3 subtitle color-text-2">Problem:</h2>
          <p className="is-size-4 subtitle color-text-3">
            It is summer in the province of Chaco - Argentina, and unluckly
            there is very hot, around 35-40°C, but luckly the San Bernardo city
            has a sports club with some pools. Then the city hall needed to open
            this sports club, but the pandemic situation is still around, so
            they need a way to solve that problem. They concluded that they need
            a system in which people who want to go to the club can register
            their shifts, then if a coronavirus wave come from there, they will
            be able to track the trail.
          </p>

          <h2 className="is-size-3 subtitle color-text-2">Solution:</h2>
          <p className="is-size-4 subtitle color-text-3">
            The main requirement was every person could access to the system
            from everywhere to do their shifts, so the system had to be a
            web-site.
            <br />
            We decided to develop with React.js, Material-UI for front-end and
            Strapi for back-end.
          </p>

          <h2 className="is-size-3 subtitle color-text-2">Result:</h2>
          <p className="is-size-4 subtitle color-text-3">
            After some days of development, the site was finished.
          </p>

          <hr className="background-color2" />
          <h3 className="is-size-5 subtitle color-text-3">User panel</h3>
          <Image
            src="/images/complejo.png"
            layout="intrinsic"
            width={1200}
            height={600}
          />
          <Image
            src="/images/complejo2.png"
            layout="intrinsic"
            width={1200}
            height={600}
          />

          <hr className="background-color2" />
          <h3 className="is-size-5 subtitle color-text-3">Admin panel</h3>
          <Image
            src="/images/complejo3.png"
            layout="intrinsic"
            width={1200}
            height={600}
          />

          <br />
          <h2 className="is-size-3 subtitle color-text-2">In production:</h2>
          <p className="is-size-4 subtitle color-text-3">
            Five day after deploy there are more than 800 people registered in.
          </p>
        </div>
      </Section>

      <style jsx>{`
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
