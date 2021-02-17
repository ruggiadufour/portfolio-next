import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="background-color3 flex-items">
        <div className="item">
          <a
            id="github"
            href="https://github.com/ruggiadufour/"
            target="_blank"
          >
            <Image
              src="/images/github-info.png"
              alt="github-logo"
              width={50}
              height={50}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/angel-ruggia-dufour-1608b815a/"
            target="_blank"
          >
            <Image
              src="/images/linkedin.png"
              alt="linkedin-logo"
              width={50}
              height={50}
            />
          </a>
        </div>
      </footer>
      <style jsx>{`
        footer{
          
          bottom: 0;
          width: 100%;
        }
        a {
          margin: 10px;
        }
        #github {
          filter: invert(100%);
        }
      `}</style>
    </>
  );
}
