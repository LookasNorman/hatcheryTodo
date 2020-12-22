import './App.css';
import { makeStyles } from '@material-ui/core/styles'
import {TodoSummary} from './components/TodoSummary'
import state from './state/state'

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

function App() {
    const classes = useStyles()

  return (
    <div className="App">
      <header className={`${classes.main} ${classes.flex}`}>
          {state.map((item, key) => (
              // console.log(item)
              <TodoSummary key={key} data={item}/>
              ))}

      </header>
    </div>
  );
}

export default App;
