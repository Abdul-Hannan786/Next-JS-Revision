const Todos = async () => {
  const response = await fetch("https://dummyjson.com/todos?limit=8");
  const { todos } = await response.json();
  console.log(todos);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Recent Posts</h1>
      <div className="grid grid-cols-3 gap-5 mt-10">
        {todos.map(({ id, todo, completed }) => (
          <div
            key={id}
            className="flex gap-5 items-center shadow p-6 rounded-xl bg-mist-800 hover:scale-103 transition cursor-pointer"
          >
            <input type="checkbox" checked={completed} readOnly />
            <h2>{todo}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
