import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  // array static variable to store tasks
  let [todoArray, setTodoArray] = useState([
    { task: "Sample task", id: uuidv4(), done: false },
  ]);

  function handleAddTaskInTodoArray() {
    console.log("todoArray ->", todoArray);
    setTodoArray((currTodoArray) => {
      return [
        ...currTodoArray,
        {
          task: newtask,
          id: uuidv4(),
          done: false,
        },
      ];
    });
    setNewTask("");
  }

  // newTask state variable to take value from input
  let [newtask, setNewTask] = useState("");

  function handleNewTask(event) {
    // console.log("event.target ->", event.target);
    // console.log("event.target.value ->", event.target.value);
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


  // handleToUpperCase - Update all in array
  function handleToUpperCase() {
   let upperCaseNewArray = todoArray.map(
    (todo) => {

      // remember here we are updating todo Object then return to create new Array
      // so spread operator -> id & need to mention key task: todo.task.toUpperCase(), Cannot directly update value
      return {
        ...todo,
        task: todo.task.toUpperCase(),
      };
    }
   );
   console.log("upperCaseNewArray ->", upperCaseNewArray);
   setTodoArray(upperCaseNewArray);
  };


   // handleUpperCaseElement
     function handleUpperCaseElement(id) {
      let newUpperCaseElementArray = todoArray.map(
        (todo) => {
          if(todo.id === id){
            return {
              ...todo,
              task: todo.task.toUpperCase(),
            };
          }else{
            return todo;
          }
        }
      );
      console.log("newUpperCaseElementArray ->", newUpperCaseElementArray);
      setTodoArray(newUpperCaseElementArray);
     };


     // handleAllDone 
     function handleAllDone() {
      let newAllDoneArray = todoArray.map(
        (todo) => {
          return {
            ...todo,
            done: true,
          };
        }
      );

      setTodoArray(newAllDoneArray);
     };

     // DoneStyle
    let DoneStyle = {
      textDecorationLine: "line-through"
    };


    // handleDoneSingleTask

    function handleDoneSingleTask(id) {
      let newDoneSingleTaskArray = todoArray.map(
        (todo) => {
          if(todo.id == id && todo.done == false){
            return {
              ...todo,
              done: true,
            }
          }
          else if( todo.id == id && todo.done == true ){
            return {
              ...todo,
              done: false,
            }
          }
          else {
            return todo;
          };
        }
      );

      setTodoArray(newDoneSingleTaskArray);
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
          <li key={todo.id} style={{margin: "1rem"}}
          >
            <span style = { todo.done == true ? DoneStyle : null }>{todo.task}</span>
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => handleDeleteTask(todo.id) }>Delete</button>
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => handleUpperCaseElement(todo.id)}>Uppercase</button>
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => handleDoneSingleTask(todo.id)}>Done</button>

          </li>
        ))}
      </ul>
      <br />
      <br />
      <button onClick={handleToUpperCase}>Update All</button>
      <br />
      <br />
      <button onClick={handleAllDone}>All Done</button>
    </div>
  );
}

/*

* POINT
- if we use <button onClick={ handleDeleteTask(todo.id) >Delete</button> like this, means directly pass id in to () this will automatically exceute function without event clicking 
- So to Stop that immediate excution , wrap that into arrow function, means when we click it invoke that arrow function then internal function excute 

*/