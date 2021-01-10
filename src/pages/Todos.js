import React from 'react'
import { useEffect, useState } from 'react'
import { getTodosByObjectAndType } from '../api/Todos'
import TodosPart from '../components/TodosPart'
import {CircularProgress} from '@material-ui/core'

export default function Todos() {
  const [todos, setTodos] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      const todosList = await getTodosByObjectAndType()
      if (!todosList.error) {
        setTodos(todosList.data)
      }

    }
    fetchData()
  }, [])

  return (
      todos ? Object.entries(todos).map(([key, item]) => (
        <TodosPart title={key} data={item} />
      )) : <CircularProgress/>
  )
}