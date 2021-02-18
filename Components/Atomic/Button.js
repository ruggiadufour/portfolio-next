export default function Button({ text, onClick, type, className, disabled }) {
  return (
    <>
      <button
        className={"background-color3 color-text-3 " + className}
        type={type ? type : "button"}
        onClick={onClick}
        disabled={disabled?disabled:false}
      >
        {text}
      </button>
      <style jsx>{`
        button {
          border-radius: 3px;
          padding: 15px;
          margin: auto;
          margin-bottom: 20px;
          border: solid thin orangered;
          width: 100%;
          font-size: 1.3rem;
        }
        button:hover {
          cursor: pointer;
        }
        button:focus {
          outline: solid thin orangered;
        }
      `}</style>
    </>
  );
}
