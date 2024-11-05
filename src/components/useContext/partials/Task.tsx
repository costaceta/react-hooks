import { useState } from "react";
import { TaskAction, Task as TaskType } from "../../../store/reducers";

const Task = ({
  task,
  onRemoveTask,
  onChangeTask,
  dispatch,
}: {
  task: TaskType;
  onRemoveTask: (dispatch: React.Dispatch<TaskAction>, id: number) => void;
  onChangeTask: (dispatch: React.Dispatch<TaskAction>, task: TaskType) => void;
  dispatch: React.Dispatch<TaskAction>;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          className="flex-1 rounded-full border border-gray-500 px-5 py-2"
          type="text"
          value={task.text}
          onChange={(e) => {
            onChangeTask(dispatch, {
              ...task,
              text: e.target.value,
            });
          }}
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
};

export default Task;
