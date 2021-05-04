import Head from "next/head";
import { useEffect } from "react";
import About from "../Components/Home/About";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="images/favicon.svg" />
        <meta
          name="description" 
          content="Angel Ruggia Dufour's portfolio. Here you are going to know all about him (his projects, resume, blogs, etc.)."
        />
        <meta
          name="keywords"
          content="Angel, Ruggia, Dufour, Portfolio, React, Frontend, Blog"
        />
        <meta name="author" content="Angel Ruggia Dufour" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Angel Ruggia Dufour - Front-End Developer</title>
      </Head>
      <main>
        <About />
      </main>
    </>
  );
}
