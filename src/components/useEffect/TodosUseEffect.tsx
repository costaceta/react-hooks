import { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export const TodoUseEffect = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [userFilter, setUserFilter] = useState<number | null>(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });

  }, []);

  useEffect(() => {
    if (userFilter) {
        console.log('useEffect - userFilter changed');
    }
  }, [userFilter]);

  const handleChangeFilter = (event) => {
    setUserFilter(event.target.value);
  }

  const filteredTodos = userFilter
    ? todos.filter((todo) => todo.userId === Number(userFilter)) : todos;

  return (
    <>
      <h2 className="font-bold text-2xl my-3">TODO</h2>

      <div className="flex flex-col gap-2 mb-5">
        <label>Cliente</label>
        <input
          placeholder="Digite o id do cliente"
          className="border-2 rounded p-3"
          type="text"
          onChange={handleChangeFilter}
        />
      </div>

      <ul className="list-disc list-inside border-2 border-blue-900 p-3 rounded-md">
        {filteredTodos.map((todo: Todo) => (
          <li key={todo.id} className="text-blue-900">
            {todo.title} - USER: {todo.userId}
          </li>
        ))}
      </ul>
    </>
  );
};
