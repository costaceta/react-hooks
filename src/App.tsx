import "./App.css";
import Form from "./components/useRef/Form";
import UseRefCounter from "./components/useRef/UseRefCounter";

function App() {
  return (
    <>
      <h1 className="text-blue-900 text-3xl mb-10">React hooks - aulas</h1>
      <Form />
      <hr className="my-10"/>
      <UseRefCounter />

    </>
  );
}

export default App;
