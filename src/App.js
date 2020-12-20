import './App.css';
import {Today} from './components/Today'
import state from './state/state'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Today data={state.today}/>
      </header>
    </div>
  );
}

export default App;
