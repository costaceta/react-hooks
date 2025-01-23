import { useRef, useState } from "react";

function UseRefCounter() {
  const countRef = useRef(0);
  const [renderCount, setRenderCount] = useState(0);

  const increment = () => {
    countRef.current += 1;
    console.log("Valor atual do contador:", countRef.current);
  };

  return (
    <div>
      <h2 className="text-2xl bold mb-2">Contador sem Re-renderização</h2>
      <p className="mb-2">O contador atual está armazenado em useRef.</p>
      <button className="bg-black text-white px-6 py-2 mb-3" onClick={increment}>
        Incrementar
      </button>
      <br />
      <button
        className="bg-black text-white px-6 py-2"
        onClick={() => setRenderCount(renderCount + 1)}
      >
        Forçar Re-renderização
      </button>
      <p>Quantidade de re-renderizações: {renderCount}</p>
    </div>
  );
}

export default UseRefCounter;
