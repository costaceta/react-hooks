import { useState } from "react";
import { TasksAction } from "../../../store/reducers";

interface AddTaskProps {
  onAddTask: (dispatch: React.Dispatch<TasksAction>, text: string) => void;
  dispatch: React.Dispatch<TasksAction>;
}

function AddTask({ onAddTask, dispatch }: AddTaskProps) {
  const [text, setText] = useState("");

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
          if(!text) return

          setText("");
          onAddTask(dispatch, text);
        }}
        className="rounded-full bg-blue-500 px-5 py-2 text-white"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
