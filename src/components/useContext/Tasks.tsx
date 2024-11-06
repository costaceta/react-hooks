import AddTask from "./partials/AddTask";
import TaskList from "./partials/TaskList";

function Tasks() {
  return (
    <>
      <h2 className="text-3xl p-2 font-bold mb-2">Lista de tarefas</h2>
      <AddTask />
      <TaskList />
    </>
  );
}

export default Tasks;
