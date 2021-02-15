import { useEffect } from "react";

export default function Gears() {
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        document.body.style.setProperty(
          "--scroll",
          window.pageYOffset / (2000 - 600)
          );
          // window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      },
      false
    );
  }, []);
  return (
    <>
      <div className="gears">
        <img
          src="images/svg/gear.svg"
          className="gear"
          id="gear4"
          alt="gearsvg"
          width="250px"
          height="250px"
        />
        <img
          src="images/svg/gear.svg"
          className="gear"
          id="gear3"
          alt="gearsvg"
          width="200px"
          height="200px"
        />
        <img
          src="images/svg/gear.svg"
          className="gear"
          id="gear2"
          alt="gearsvg"
          width="150px"
          height="150px"
        />
        <img
          src="images/svg/gear.svg"
          className="gear"
          id="gear1"
          alt="gearsvg"
          width="100px"
          height="100px"
        />
      </div>
      <style jsx>{`
        .gears {
          position: absolute;
          top: 50%;
          left: 10%;
          transform: translate(-50%, -50%);
          width: 500px;
          height: 500px;
          z-index: 0;
        }

        @media (max-width: 500px) {
          .gears #gear4 {
            display: none;
          }
        }

        #gear1 {
          top: 50%;
          left: 50%;

          animation: rotate2 0.5s linear infinite;
          animation-play-state: paused;
          animation-delay: calc(var(--scroll) * -1s);
          animation-iteration-count: 1;
          animation-fill-mode: both;
        }
        #gear2 {
          top: 125px;
          left: 50%;

          animation: rotate1 0.5s linear infinite;
          animation-play-state: paused;
          animation-delay: calc(var(--scroll) * -1s);
          animation-iteration-count: 1;
          animation-fill-mode: both;
        }
        #gear3 {
          top: 175px;
          left: 425px;

          animation: rotate2 0.5s linear infinite;
          animation-play-state: paused;
          animation-delay: calc(var(--scroll) * -1s);
          animation-iteration-count: 1;
          animation-fill-mode: both;
        }
        #gear4 {
          top: 375px;
          left: 525px;

          animation: rotate1 0.5s linear infinite;
          animation-play-state: paused;
          animation-delay: calc(var(--scroll) * -1s);
          animation-iteration-count: 1;
          animation-fill-mode: both;
        }
        .gear {
          position: absolute;
          opacity: 0.55;
        }
        @keyframes rotate1 {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        @keyframes rotate2 {
          from {
            transform: translate(-50%, -50%) rotate(360deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }
      `}</style>
    </>
  );
}
