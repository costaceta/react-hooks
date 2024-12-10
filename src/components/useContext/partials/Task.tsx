import { useContext, useState } from "react";
import { Task as TaskType } from "../../../store";
import { TasksDispatchContext } from "../../../contexts/TasksContext";
import { editTask, removeTask } from "../../../store/actions";

interface TaskProps {
  task: TaskType;
}

function Task({ task }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(TasksDispatchContext);

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          className="flex-1 rounded-full border border-gray-500 px-5 py-2"
          type="text"
          value={task.text}
          onChange={(event) =>
            editTask(dispatch, {
              ...task,
              text: event.target.value,
            })
          }
        />
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="rounded-full bg-blue-500 px-5 py-2 text-white"
        >
          Salvar
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        <div className="flex flex-1 items-center">{task.text}</div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="rounded-full bg-green-500 px-5 py-2 text-white"
        >
          Editar
        </button>
      </>
    );
  }

  return (
    <>
      <div className="w-full flex gap-2">
        {taskContent}
        <button
          onClick={() => removeTask(dispatch, task.id)}
          className="rounded-full bg-red-500 px-5 py-2 text-white"
        >
          Remover
        </button>
      </div>
    </>
  );
}

export default Task;
