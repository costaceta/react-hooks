import { Task as TaskType } from "../../../store";

interface TaskProps {
  task: TaskType;
}

function Task({ task }: TaskProps) {
  return (
    <>
      {task.text}
      <div className="flex gap-2">
        <button className="rounded-full bg-green-500 px-5 py-2 text-white">
          Editar
        </button>
        <button className="rounded-full bg-red-500 px-5 py-2 text-white">
          Remover
        </button>
      </div>
    </>
  );
}

export default Task;
