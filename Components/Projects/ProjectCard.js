import Image from "next/image";
export default function ProjectCard({title, short_desc, src}) {
  return (
    <>
      <div className="p-card ">
        <div className="container_imagen">
          <Image
            layout="intrinsic"
            width={600}
            height={300}
            src={src}
          />
        </div>

        <h3 className="is-size-3 subtitle color-text-2">{title}</h3>
        <p className="is-size-4 color-text-3">
          {short_desc}
        </p>
        <hr className="background-color3" />
      </div>
      <style jsx>{`
        hr {
          margin: 5px;
          padding: 4px;
        }
        .p-card {
          width: 600px;
          min-height: 300px;
          padding: 20px;
        }
        .p-card:hover {
          cursor: pointer;
        }
        .container_imagen {
          width: 100%;
          height: auto;
          position: relative;
        }
      `}</style>
    </>
  );
}
