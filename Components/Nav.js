import Link from "next/link";
import Image from "next/image";

export default function Nav({ changeTheme, theme }) {
  return (
    <header>
      <nav
        className="navbar is-fixed-top nav-hover background-color3"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link href="/#intro">
              <a className="navbar-item is-size-4 color-text">
                <strong>Angel Ruggia Dufour</strong>
              </a>
            </Link>
            <a
              role="button"
              className="navbar-burger is-dark"
              aria-label="menu"
              aria-expanded="false"
              data-target="navMenu"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navMenu" className="navbar-menu ">
            <div className="navbar-end is-dark">
              <Link href="/#info">
                <a className="navbar-item color-text">About me</a>
              </Link>

              <Link href="/projects">
                <a className="navbar-item color-text">Projects</a>
              </Link>

              <Link href="/contact">
                <a className="navbar-item color-text">Contact</a>
              </Link>

              <Link href="/resume">
                <a className="navbar-item color-text">Resume</a>
              </Link>
              <i className="theme_selector" onClick={changeTheme}>
                <Image
                  src={theme ? "/images/sun.png" : "/images/moon.png"}
                  alt="icon-theme"
                  width={35}
                  height={35}
                />
              </i>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .theme_selector {
          margin-top: 10px;
          cursor: pointer;
        }
      `}</style>
    </header>
  );
}
