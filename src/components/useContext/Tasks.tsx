function Tasks() {
  return (
    <>
      <h2 className="text-3xl p-2 font-bold mb-2">Lista de tarefas</h2>
      <div className="flex gap-2 justify-center mb-4">
        <input
          className="rounded-full border border-gray-500 px-5 py-2"
          type="text"
          placeholder="Adicionar tarefa"
        />
        <button className="rounded-full bg-blue-500 px-5 py-2 text-white">
          Adicionar
        </button>
      </div>
      <div>
        <ul className="border border-gray-500 rounded-md px-2 py-0">
          <li className="flex items-center p-3 gap-2 justify-between border-b border-gray-500">
            Imprimir relatório
            <div className="flex gap-2">
              <button className="rounded-full bg-green-500 px-5 py-2 text-white">
                Editar
              </button>
              <button className="rounded-full bg-red-500 px-5 py-2 text-white">
                Remover
              </button>
            </div>
          </li>
          <li className="flex items-center p-3 gap-2 justify-between border-b border-gray-500">
            Imprimir relatório
            <div className="flex gap-2">
              <button className="rounded-full bg-green-500 px-5 py-2 text-white">
                Editar
              </button>
              <button className="rounded-full bg-red-500 px-5 py-2 text-white">
                Remover
              </button>
            </div>
          </li>
          <li className="flex items-center p-3 gap-2 justify-between border-b border-gray-500 last:border-b-0">
            Imprimir relatório
            <div className="flex gap-2">
              <button className="rounded-full bg-green-500 px-5 py-2 text-white">
                Editar
              </button>
              <button className="rounded-full bg-red-500 px-5 py-2 text-white">
                Remover
              </button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Tasks;
