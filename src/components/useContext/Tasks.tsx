import { useReducer } from "react";
import { initialTaskState } from "../../store";
import { addTask, editTask, removeTask } from "../../store/actions";
import { tasksReducer } from "../../store/reducers";
import AddTask from "./partials/AddTask";
import TaskList from "./partials/TaskList";

function Tasks() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTaskState);

  return (
    <>
      <h2 className="text-3xl p-2 font-bold mb-2">Lista de tarefas</h2>
      <AddTask onAddTask={addTask} dispatch={dispatch} />

      {tasks.length === 0 ? (
        <p className="border p-3">Nenhuma task encontrada!</p>
      ) : (
        <TaskList
          tasks={tasks}
          onEditTask={editTask}
          onRemoveTask={removeTask}
          dispatch={dispatch}
        />
      )}
    </>
  );
}

export default Tasks;
