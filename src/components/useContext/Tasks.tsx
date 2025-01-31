import AddTask from "./partials/AddTask";
import TaskList from "./partials/TaskList";
import TasksProvider from "../../contexts/TasksProvider";

function Tasks() {
  return (
    <>
      <TasksProvider>
        <h2 className="text-3xl p-2 font-bold mb-2">Lista de tarefas</h2>

        <AddTask />
        <TaskList />
      </TasksProvider>
    </>
  );
}

export default Tasks;
