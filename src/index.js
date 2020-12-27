import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import reportWebVitals from './reportWebVitals'
import Today from './pages/Today'
import Overdue from './pages/Overdue'
import NextWeek from './pages/NextWeek'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/today'>
          <Today />
        </Route>
        <Route path='/overdue'>
          <Overdue />
        </Route>
        <Route path='/nextWeek'>
          <NextWeek />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
