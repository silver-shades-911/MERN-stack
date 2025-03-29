import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  // array static variable to store tasks
  let [todoArray, setTodoArray] = useState([
    { task: "Sample task", id: uuidv4() },
  ]);

  function handleAddTaskInTodoArray() {
    console.log("todoArray ->", todoArray);
    setTodoArray((currTodoArray) => {
      return [
        ...currTodoArray,
        {
          task: newtask,
          id: uuidv4(),
        },
      ];
    });
    setNewTask("");
  }

  // newTask state variable to take value from input
  let [newtask, setNewTask] = useState("");

  function handleNewTask(event) {
    console.log("event.target ->", event.target);
    console.log("event.target.value ->", event.target.value);
    setNewTask((newTask) => {
      newTask = event.target.value;
      return newTask;
    });
  }

  // handleDeleteTask

  function handleDeleteTask(id) {
    console.log("ID of task that will delete",id);
    // use filter method 
    let newUpdatedArrayAfterDelete = todoArray.filter(
        (todo) => todo.id != id 
    );
    setTodoArray(newUpdatedArrayAfterDelete);
  }

  return (
    <div>
      <h2>TODO-List APP</h2>
      <input
        type="text"
        name="taskInput"
        id="taskInput"
        onChange={handleNewTask}
        value={newtask}
      />
      &nbsp; &nbsp;
      <button onClick={handleAddTaskInTodoArray}>Add</button>
      <hr />
      <h3>Tasks</h3>
      <ul>
        {todoArray.map((todo) => (
          <li key={todo.id}>
            <span>{todo.task}</span> &nbsp; &nbsp; &nbsp;
            <button onClick={() => handleDeleteTask(todo.id) }>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/*

* POINT
- if we use <button onClick={ handleDeleteTask(todo.id) >Delete</button> like this, means directly pass id in to () this will automatically exceute function without event clicking 
- So to Stop that immediate excution , wrap that into arrow function, means when we click it invoke that arrow function then internal function excute 

*/