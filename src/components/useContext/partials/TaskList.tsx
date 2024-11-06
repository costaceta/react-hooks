import Task from "./Task";

function TaskList() {
  return (
    <div>
      <ul className="border border-gray-500 rounded-md px-2 py-0">
        <li className="flex items-center p-3 gap-2 justify-between border-b border-gray-500">
          <Task />
        </li>
        <li className="flex items-center p-3 gap-2 justify-between border-b border-gray-500">
          <Task />
        </li>
        <li className="flex items-center p-3 gap-2 justify-between border-b border-gray-500 last:border-b-0">
          <Task />
        </li>
      </ul>
    </div>
  );
}

export default TaskList;
