import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import AddTodoForm from './components/AddTodoForm'
import NgāManuhiri from './components/ngā-manuhiri'
import TotalCompleteItems from './components/TotalCompleteItems'

const App = () => {
  return (
    <div className="container bg-white p-4 mt-5">
      <h1>Manuhiri tūtira</h1>
      <AddTodoForm />
      <NgāManuhiri />
      <TotalCompleteItems />
    </div>
  )
}

export default App
