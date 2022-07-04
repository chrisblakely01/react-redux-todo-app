import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'manuhiri',
  initialState: [
    { id: 1, title: 'todo1', completed: false },
    { id: 2, title: 'todo2', completed: false },
    { id: 3, title: 'todo3', completed: false },
    { id: 4, title: 'todo4', completed: true },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newManuhiri = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      }
      state.push(newManuhiri)
    },
  },
})

export const { addTodo } = todoSlice.actions
export default todoSlice.reducer
