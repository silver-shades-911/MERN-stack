import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">📝 TODO App</h1>
        <TodoApp />
      </div>
    </div>
  );
}

export default App;
