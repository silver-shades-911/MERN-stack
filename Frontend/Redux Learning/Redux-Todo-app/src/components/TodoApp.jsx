import React from 'react';
import Form from './Form';
import TodoList from './TodoList';

const TodoApp = () => {
  return (
    <div>
      <Form />
      <hr className="my-4 border-t border-gray-300" />
      <TodoList />
    </div>
  );
};

export default TodoApp;
