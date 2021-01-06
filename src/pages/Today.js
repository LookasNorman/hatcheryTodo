import '../App.css'
import { makeStyles } from '@material-ui/core/styles'
import { TodoList } from '../components/TodoList'
import { useEffect, useState } from 'react'
import { getTodayTodos } from '../api/Todos'

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
      const today = await await getTodayTodos(date)
      if(!today.error){
        setState([
          { title: 'Dzisiaj', link: null, data: today.data },
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
