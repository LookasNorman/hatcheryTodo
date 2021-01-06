import '../App.css'
import { useEffect, useState } from 'react'
import { getNextTodosTypesObjects } from '../api/Todos'
import TodosPart from '../components/TodosPart'

function Today() {

  const [state, setState] = useState([])
  useEffect(() => {
    var today = new Date(),
      date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    const fetchData = async () => {
      const nextWeek = await getNextTodosTypesObjects(date)
      if (!nextWeek.error) {
        setState(nextWeek.data)
      }
    }
    fetchData()
  }, [])

  return (
    Object.entries(state).map(([key, item]) => (
      <TodosPart key={key} data={item} title={key} />
    ))
  )
}

export default Today
