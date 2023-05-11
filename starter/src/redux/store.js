// This is the store (as shown in the diagram)
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

export default configureStore({
  // this will hold all reducers (as shown in the diagram)
  reducer: {
    todos: todoReducer,
  },
});
