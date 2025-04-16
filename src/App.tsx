import { useRef } from "react";
import "./App.css";
import Modal from "./components/useImperativeHandle/Modal";
import { TodoUseffect } from "./components/useEffect/TodoUseffect";

function App() {
  const modal = useRef<any>(null);

  const handleClick = () => {
    if (modal.current) {
      modal.current.open();
    }
  };

  return (
    <>
      <h1 className="text-blue-900 text-3xl">React hooks - aulas</h1>
      <TodoUseffect />
      {/* <button
        onClick={handleClick}
        className="bg-black text-white px-6 py-2 mt-2"
      >
        Open Modal
      </button>

      <Modal ref={modal}>
        <h1>Modal</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
          commodi fugit quaerat expedita hic quae ratione animi. Labore, quasi
          suscipit illo quaerat error similique ducimus ipsa cumque, tenetur
          consectetur facilis?
        </p>
      </Modal> */}
    </>
  );
}

export default App;
