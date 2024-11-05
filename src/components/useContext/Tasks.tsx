import { useReducer } from "react";
import { initialTasks, tasksReducer } from "../../store";
import AddTask from "./partials/AddTask";
import TaskList from "./partials/TaskList";
import { addTask, editTask, removeTask } from "../../store/actions";

function Tasks() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <>
      <h2 className="text-3xl p-2 font-bold mb-2">Lista de tarefas</h2>
      <AddTask onAddTask={addTask} dispatch={dispatch} />
      <TaskList
        tasks={tasks}
        onRemoveTask={removeTask}
        onChangeTask={editTask}
        dispatch={dispatch}
      />
    </>
  );
}

export default Tasks;
