import '../App.css'
import { useEffect, useState } from 'react'
import { getOverdueTodosTypesObjects } from '../api/Todos'
import TodosPart from '../components/TodosPart'

function Overdue() {
  const [overdueObjects, setOverdueObject] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const overdueTodos = await getOverdueTodosTypesObjects()
      if (!overdueTodos.error) {
        setOverdueObject(overdueTodos.data)
      }
    }
    fetchData()

  }, [])

  return (
    Object.entries(overdueObjects).map(([key, item]) => (
      <TodosPart key={key} data={item} title={key} />
    ))
  )
}

export default Overdue
