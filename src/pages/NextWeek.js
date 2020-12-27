import '../App.css'
import { makeStyles } from '@material-ui/core/styles'
import { TodoList } from '../components/TodoList'
import { useEffect, useState } from 'react'

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
  let date = '2020-12-26'
  useEffect(() => {
    const fetchData = async () => {
      const nextWeek = await fetch(
        `http://localhost:8000/api/todos.json?date[strictly_after]=${date}&exists[endDate]=false`,
      ).then(res => res.json())
      setState([
        { title: 'Następny tydzień', link: '/nextWeek', data: nextWeek},
      ])
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
