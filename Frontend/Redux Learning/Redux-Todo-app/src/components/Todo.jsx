import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todo = ({ todo }) => {
  const { id, task } = todo;
  const dispatch = useDispatch();

  const handleDeleteToDo = () => {
    dispatch(removeTodo({ id }));
  };

  return (
    <div className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded-lg shadow-sm">
      <span className="text-gray-800 font-medium break-words">{task}</span>
      <button
        onClick={handleDeleteToDo}
        className="text-red-500 hover:text-red-700 transition"
        title="Delete"
      >
        <MdDeleteForever size={24} />
      </button>
    </div>
  );
};

export default Todo;
