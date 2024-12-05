import { useContext, useState } from "react";
import { addTask } from "../../../store/actions";
import { TasksDispatchContext } from "../../../contexts/TasksContext";

function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useContext(TasksDispatchContext);

  return (
    <div className="flex gap-2 justify-center mb-4">
      <input
        className="rounded-full border border-gray-500 px-5 py-2"
        type="text"
        placeholder="Adicionar tarefa"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button
        onClick={() => {
          if (!text) return;

          setText("");
          addTask(dispatch, text);
        }}
        className="rounded-full bg-blue-500 px-5 py-2 text-white"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
