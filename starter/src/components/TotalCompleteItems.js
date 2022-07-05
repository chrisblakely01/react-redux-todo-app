import React from 'react'
import { useSelector } from 'react-redux'


const TotalCompleteItems = () => {
  const completeManuhiri = useSelector((state) => 
  state.Manuhiri.filter((todo) => todo.completed === true))
  return <h4 className="mt-3">Ngā Manuhiri: {completeManuhiri.length}</h4>
}

export default TotalCompleteItems
