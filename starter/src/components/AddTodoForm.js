import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoSlice'

// Import the things I want done
// dispatch the actions
// pass in payload
// add to do reducers

const AddTodoForm = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(
      addTodo({
        title: value,
      })
    )
    console.log('user entered: ' + value)
  }

  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
      <label className="sr-only">Name</label>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="nau mai..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>

      <button type="submit" className="btn btn-primary mb-2">
        tāpae
      </button>
    </form>
  )
}

export default AddTodoForm
