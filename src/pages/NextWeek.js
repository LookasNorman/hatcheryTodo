import '../App.css'
import { makeStyles } from '@material-ui/core/styles'
import { TodoList } from '../components/TodoList'
import { useEffect, useState } from 'react'
import { getNextWeekTodos } from '../api/Todos'

const useStyles = makeStyles((theme) => ({
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    display: 'flex',
    alignItems: 'stretch',
    margin: '1vw 0.5vw',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
}))

function Today() {
  const classes = useStyles()
  const [state, setState] = useState([])
  useEffect(() => {
    var today = new Date(),
      date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    const fetchData = async () => {
      const nextWeek = await getNextWeekTodos(date)
      if (!nextWeek.error) {
        setState([
          { title: 'Następny tydzień', link: '/nextWeek', data: nextWeek.data },
        ])
      }
    }
    fetchData()
  }, [])

  return (
    <div className='App'>
      <header className={`${classes.main} ${classes.flex}`}>
        {state.map((item, key) => (
          <TodoList key={key} data={item} />
        ))}
      </header>
    </div>
  )
}

export default Today
