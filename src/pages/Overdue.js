import '../App.css'
import { useEffect, useState } from 'react'
import { getOverdueObjectTodos, getOverdueTodos } from '../api/Todos'
import { getObjectsAddresses } from '../api/ObjectsAddresses'
import DashboardPart from '../components/DashbordPart'

function Overdue() {
  const [overdueObjects, setOverdueObject] = useState([])

  useEffect(() => {
    var today = new Date(),
      date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    const fetchData = async () => {
      const objectsAddresses = await getObjectsAddresses()
      if (!objectsAddresses.error) {
        objectsAddresses.data.map((item, key) => {
          const fetchObjectTodos = async () => {
            const objectOverdue = await getOverdueObjectTodos(date, item.id)
            setOverdueObject(prevState => {
              return [...prevState,
                {
                  title: item.name,
                  data: [{ title: 'Zaległe', link: '/overdue', data: objectOverdue.data }]
                }]
            })
          }
          fetchObjectTodos()
        })
      }
    }
    fetchData()
  }, [])

  return (
    overdueObjects.map((item, key) => (
      <DashboardPart key={key} data={item.data} title={item.title} />
    ))
  )
}

export default Overdue
