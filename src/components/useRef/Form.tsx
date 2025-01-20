import { useRef } from "react";

function Form() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  console.log("Render");

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h2>Digite seu nome</h2>
      <input
        ref={inputRef}
        className="p-2 mt-2 border"
        type="text"
        placeholder="Seu nome"
      />
      <button onClick={handleClick} className="bg-black text-white px-6 py-2">
        Focus
      </button>
    </div>
  );
}

export default Form;
