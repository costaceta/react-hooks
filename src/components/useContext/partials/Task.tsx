import { Task as TaskType } from "../../../store";
import { TasksAction } from "../../../store/reducers";

interface TaskProps {
  task: TaskType;
  onEditTask: (dispatch: React.Dispatch<TasksAction>, task: TaskType) => void;
  onRemoveTask: (dispatch: React.Dispatch<TasksAction>, id: number) => void;
  dispatch: React.Dispatch<TasksAction>;
}

function Task({ task, onEditTask, onRemoveTask, dispatch }: TaskProps) {
  return (
    <>
      {task.text}
      <div className="flex gap-2">
        <button className="rounded-full bg-green-500 px-5 py-2 text-white">
          Editar
        </button>
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
