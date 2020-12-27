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
  var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  useEffect(() => {
    const fetchData = async () => {
      const today = await fetch(
        `http://lookaskonieczny.com/api/todos.json?date=${date}&exists[endDate]=false`,
      ).then(res => res.json())
      setState([
        { title: 'Dzisiaj', link: '/today', data: today },
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
