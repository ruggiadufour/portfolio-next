export default function TextBox({ placeholder, onChange, type, required, value }) {
  function getInput(){
    switch (type) {
      case "text":
        
        break;
    
      default:
        break;
    }
  }
  return (
    <>
      {
        type === "textarea" ? (
          <textarea
            className="background-color3 color-text-3"
            placeholder={placeholder ? placeholder : ""}
            onChange={onChange}
            required={required}
            value={value}
          />
        ) : (
          <input
            type={type}
            className="background-color3 color-text-3"
            placeholder={placeholder ? placeholder : ""}
            onChange={onChange}
            required={required}
            value={value}
          />)
      }
      <style jsx>{`
        input,
        textarea {
          padding: 15px;
          width: 100%;
          margin-bottom: 15px;
          border: solid thin orangered;
          border-radius: 3px;
          resize: vertical;
        }
        input:focus,
        textarea:focus {
          
          outline: solid thin orangered;
        }
      `}</style>
    </>
  );
}
