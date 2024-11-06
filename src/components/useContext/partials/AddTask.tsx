function AddTask() {
  return (
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
  );
}

export default AddTask;
