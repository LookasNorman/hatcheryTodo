import '../App.css'
import { useEffect, useState } from 'react'
import { getTodayTodosTypesObjects } from '../api/Todos'
import TodosPart from '../components/TodosPart'

function Today() {
  const [today, setToday] = useState([])
  useEffect(() => {
    var today = new Date(),
      date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const fetchData = async () => {
      const todayTodos = await await getTodayTodosTypesObjects(date)
      if(!todayTodos.error){
        setToday(todayTodos.data)
      }
    }
    fetchData()
  }, [])

  return (
    Object.entries(today).map(([key, item]) => (
      <TodosPart key={key} data={item} title={key} />
    ))
  )
}

export default Today
