import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, title: "todo1", completed: false },
    { id: 2, title: "todo2", completed: false },
    { id: 3, title: "todo3", completed: false },
  ],
  reducers: {
    // "state" holds the current state (not updated)
    // "action" holds the new data to be updated in state and
    // the type of action we want to perform, e.g., ADD_TODO
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id); // find the array index of the ToDo
      state[index].completed = action.payload.completed; // update state
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

// the createSlice() from Redux Toolkit automatically creates actions from our reducers objects
export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
