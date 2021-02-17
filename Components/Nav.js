import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function Nav({ changeTheme, theme }) {
  useEffect(() => {
    // Get all "navbar-burger" elements
    const navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    // Check if there are any navbar burgers
    if (navbarBurgers.length > 0) {
      // Add a click event on each of them
      navbarBurgers.forEach((el) => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = document.getElementById(el.dataset.target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          target.classList.toggle("is-active");
        });
      });
    }
  }, []);

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

            <i className="theme_selector " onClick={changeTheme}>
              <Image
                src={theme ? "/images/sun.png" : "/images/moon.png"}
                alt="icon-theme"
                width={35}
                height={35}
              />
            </i>

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

      <style jsx>{`
        .theme_selector {
          margin-top: 10px;
          cursor: pointer;
        }
      `}</style>
    </header>
  );
}
