import { useRef } from "react";
import "./App.css";
import Modal from "./components/useImperativeHandle/Modal";

function App() {
  const dialog = useRef< { open: () => void } | null>(null);

  const handleClick = () => {
    if (dialog.current) {
      dialog.current.open();
    }
  };

  return (
    <>
      <h1 className="text-blue-900 text-3xl">React hooks - aulas</h1>
      <button className="bg-black text-white p-4 mt-2" onClick={handleClick}>Open Modal</button>

      <Modal ref={dialog}>
        <h1 className="text-3xl mb-4">Title Modal</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          exercitationem nulla eveniet, quia quas quo enim rerum quidem hic nisi
          fugiat. Distinctio obcaecati possimus recusandae reprehenderit, aut
          illum nemo officiis.
        </p>
      </Modal>
    </>
  );
}

export default App;
