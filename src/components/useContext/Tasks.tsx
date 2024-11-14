import { useReducer } from "react";
import AddTask from "./partials/AddTask";
import TaskList from "./partials/TaskList";
import { tasksReducer } from "../../store/reducers";
import { initialTaskState } from "../../store";
import { addTask } from "../../store/actions";

function Tasks() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTaskState);

  console.log("tasks", tasks);

  return (
    <>
      <h2 className="text-3xl p-2 font-bold mb-2">Lista de tarefas</h2>
      <AddTask onAddTask={addTask} dispatch={dispatch} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default Tasks;
