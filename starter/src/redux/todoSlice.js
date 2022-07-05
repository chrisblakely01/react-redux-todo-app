import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'manuhiri',
  initialState: [
    { id: 1, title: 'todo1', completed: false },
    { id: 2, title: 'todo2', completed: false },
    { id: 3, title: 'todo3', completed: false },
    { id: 4, title: 'todo4', completed: true },
  ],

  // for each reducer, there is an action to export.
  reducers: {
    addTodo: (state, action) => {
      const newManuhiri = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      }
      state.push(newManuhiri)
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id)
      state[index].completed = action.payload.completed
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id)
    },
    
  },
})

// export the actions
export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions
export default todoSlice.reducer
