import { useContext } from "react";
import { Task as TaskType } from "../../../store";
import Task from "./Task";
import { TasksContext } from "../../../contexts/TasksContext";

function TaskList() {
  const tasks = useContext(TasksContext);
  const isLastTask = tasks.length > 0 ? tasks[tasks.length - 1].id : 0;

  return (
    <div>
      {tasks.length === 0 ? (
        <p className="border p-3">Nenhuma task encontrada!</p>
      ) : (
        <ul className="border border-gray-500 rounded-md px-2 py-0">
          {tasks.map((task: TaskType) => (
            <li
              key={task.id}
              className={`flex items-center p-3 gap-2 justify-between border-b border-gray-500 ${isLastTask && "last:border-b-0"}`}
            >
              <Task task={task} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
