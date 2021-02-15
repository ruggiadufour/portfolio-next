export default function Section({ children, add_class }) {
  return (
    <>
      <section id={add_class} className={`hero is-fullheight background-color1 ${add_class ? add_class : ""}`}>
        <div className="hero-body">
          <div className="container2">
            {children}
          </div>
        </div>
      </section>
      <style jsx>{`
        .info{
          font-weight: 500;
        }
        .intro {
          background-image: url(../images/init.jpg);
          background-position: center;
          background-size: cover;
          background-attachment: fixed;
          background-blend-mode: soft-light;
        }
        .container2 {
          margin: auto;
          width: 90%;
        }
      `}</style>
    </>
  );
}
