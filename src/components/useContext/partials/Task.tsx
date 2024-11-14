import { useState } from "react";
import { Task as TaskType } from "../../../store";
import { TasksAction } from "../../../store/reducers";

interface TaskProps {
  task: TaskType;
  onEditTask: (dispatch: React.Dispatch<TasksAction>, task: TaskType) => void;
  onRemoveTask: (dispatch: React.Dispatch<TasksAction>, id: number) => void;
  dispatch: React.Dispatch<TasksAction>;
}

function Task({ task, onEditTask, onRemoveTask, dispatch }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false);

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          className="flex-1 rounded-full border border-gray-500 px-5 py-2"
          type="text"
          value={task.text}
          onChange={(event) =>
            onEditTask(dispatch, {
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
          onClick={() => onRemoveTask(dispatch, task.id)}
          className="rounded-full bg-red-500 px-5 py-2 text-white"
        >
          Remover
        </button>
      </div>
    </>
  );
}

export default Task;
