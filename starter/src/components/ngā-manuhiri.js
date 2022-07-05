import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

const NgāManuhiri = () => {
  const Manuhiri = useSelector((state) => state.Manuhiri)
  // const Manuhiri = [
  //   { id: 1, title: 'Ngairo', completed: true },
  //   { id: 2, title: 'Jaz', completed: true },
  //]
  console.log('here', Manuhiri)
  return (
    <ul className="list-group">
      {Manuhiri.map((todo) => (
        <TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </ul>
  )
}

export default NgāManuhiri
