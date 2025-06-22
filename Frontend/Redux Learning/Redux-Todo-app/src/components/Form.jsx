import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const Form = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  const handleFormInput = (e) => {
    e.preventDefault();
    setTask(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      dispatch(addTodo({ task }));
      setTask("");
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="text"
        placeholder="Add your task..."
        onChange={handleFormInput}
        value={task}
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <button
        type="submit"
        className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        Add
      </button>
    </form>
  );
};

export default Form;
