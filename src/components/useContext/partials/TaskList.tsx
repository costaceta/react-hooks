import { Task as TaskType } from "../../../store";
import Task from "./Task";

interface TaskListProps {
  tasks: TaskType[];
}

function TaskList({ tasks }: TaskListProps) {
  return (
    <div>
      <ul className="border border-gray-500 rounded-md px-2 py-0">
        {tasks.map((task: TaskType) => (
          <li key={task.id} className="flex items-center p-3 gap-2 justify-between border-b border-gray-500">
            <Task task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
