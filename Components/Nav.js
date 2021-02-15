import styles from "../styles/About.module.css";
import Link from "next/link";
export default function Nav() {
  return (
    <header>
      <nav
        className="navbar is-fixed-top is-dark background-color"
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
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
