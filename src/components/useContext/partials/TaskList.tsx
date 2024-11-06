import { TaskAction, Task as TaskType } from "../../../store/reducers";
import Task from "./Task";

interface TaskListProps {
  tasks: TaskType[];
  onRemoveTask: (dispatch: React.Dispatch<TaskAction>, id: number) => void;
  onChangeTask: (dispatch: React.Dispatch<TaskAction>, task: TaskType) => void;
  dispatch: React.Dispatch<TaskAction>;
}

const TaskList = ({
  tasks,
  onRemoveTask,
  onChangeTask,
  dispatch,
}: TaskListProps) => {
  return (
    <div>
      <ul className="border border-gray-500 rounded-md px-2 py-0">
        {tasks.length === 0 && (
          <p className="text-center p-2">Nenhuma taks encontrada!</p>
        )}
        {tasks.map((task: TaskType) => (
          <li
            key={task.id}
            className={`flex items-center p-3 gap-2 justify-between border-b border-gray-500 ${
              task.id === tasks.length - 1 ? "last:border-b-0" : ""
            }`}
          >
            <Task
              task={task}
              onRemoveTask={onRemoveTask}
              onChangeTask={onChangeTask}
              dispatch={dispatch}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
