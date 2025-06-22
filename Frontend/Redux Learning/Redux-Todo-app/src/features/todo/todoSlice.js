import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, task: "work" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // add todo method
    addTodo: (state, action) => {
      console.log("action =>", action);
      let newTodo = {
        id: nanoid(),
        task: action.payload.task,
      };

      state.todos.push(newTodo);
    },

    // remove todo method
    removeTodo: (state, action) => {
      let todoID = action.payload.id;
      state.todos = state.todos.filter((todo) => todo.id !== todoID);
    },

    //update todo method
    updateTodo: (state, action) => {
      let todoID = action.payload.id;

      // access that task object direct from state
      let updateTask = state.todos.find((todo) => todo.id === todoID);

      // assign updated value
      updateTask.task = action.payload.task;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
