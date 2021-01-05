import React from "react";
import {makeStyles} from '@material-ui/core/styles'
import {TodoSummary} from '../components/TodoSummary'
import {useEffect, useState} from 'react'
import PartHeader from "../components/basic/PartHeader";
import { OrdersSummary } from '../components/OrdersSummary'

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

export default function Dashboard() {
  const classes = useStyles()
  const [state, setState] = useState([])
  const [orders, setOrders] = useState([])

  var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  useEffect(() => {
    const fetchData = async () => {
      const today = await fetch(
        `http://lookaskonieczny.com/api/todos.json?date=${date}&exists[endDate]=false`,
      ).then(res => res.json())
      const overdue = await fetch(
        `http://lookaskonieczny.com/api/todos.json?date[strictly_before]=${date}&exists[endDate]=false`,
      ).then(res => res.json())
      const nextWeek = await fetch(
        `http://lookaskonieczny.com/api/todos.json?date[strictly_after]=${date}&exists[endDate]=false`,
      ).then(res => res.json())
      setState([
        {title: 'Zaległe', link: '/overdue', data: overdue},
        {title: 'Dzisiaj', link: '/today', data: today},
        {title: 'Następny tydzień', link: '/nextWeek', data: nextWeek}
      ])
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const all = await fetch(
        `http://lookaskonieczny.com/api/orders.json`,
      ).then(res => res.json())
      setOrders([
        {title: 'Dzisiaj', link: '/orders', data: all},
      ])
    }
    fetchData()
  }, [])

  return (
    <>
      <PartHeader text="Zadania"/>
      <header className={`${classes.main} ${classes.flex}`}>
        {state.map((item, key) => (
          <TodoSummary key={key} data={item}/>
        ))}
      </header>
      <PartHeader text="Reklamacje i zamówienia"/>
      <header className={`${classes.main} ${classes.flex}`}>
        {orders.map((item, key) => (
          <OrdersSummary key={key} data={item}/>
        ))}
      </header>
    </>
  )
}