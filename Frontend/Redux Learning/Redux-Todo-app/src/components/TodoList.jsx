import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
  const todosArray = useSelector((state) => state.todo.todos);

  return (
    <div className="mt-4 space-y-3">
      {todosArray.length > 0 ? (
        todosArray.map((todo) => <Todo key={todo.id} todo={todo} />)
      ) : (
        <p className="text-center text-gray-500">No tasks yet. Add some!</p>
      )}
    </div>
  );
};

export default TodoList;
