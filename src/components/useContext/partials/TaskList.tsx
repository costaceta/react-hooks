import { Task as TaskType } from "../../../store";
import { TasksAction } from "../../../store/reducers";
import Task from "./Task";

interface TaskListProps {
  tasks: TaskType[];
  onEditTask: (dispatch: React.Dispatch<TasksAction>, task: TaskType) => void;
  onRemoveTask: (dispatch: React.Dispatch<TasksAction>, id: number) => void;
  dispatch: React.Dispatch<TasksAction>;
}

function TaskList({
  tasks,
  onEditTask,
  onRemoveTask,
  dispatch,
}: TaskListProps) {
  return (
    <div>
      <ul className="border border-gray-500 rounded-md px-2 py-0">
        {tasks.map((task: TaskType) => (
          <li
            key={task.id}
            className="flex items-center p-3 gap-2 justify-between border-b border-gray-500"
          >
            <Task
              task={task}
              onEditTask={onEditTask}
              onRemoveTask={onRemoveTask}
              dispatch={dispatch}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
