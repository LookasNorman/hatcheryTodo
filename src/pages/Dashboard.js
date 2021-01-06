import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { EntitySummary } from '../components/EntitySummary'
import { useEffect, useState } from 'react'
import PartHeader from '../components/basic/PartHeader'
import { getNextWeekTodos, getOverdueTodos, getTodayTodos } from '../api/Todos'
import { getComplaints } from '../api/Complaints'
import { getOrders } from '../api/Orders'

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
  const [todos, setTodos] = useState([])
  const [orders, setOrders] = useState([])
  const [complaints, setComplaints] = useState([])

  var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

  useEffect(() => {
    const fetchData = async () => {
      const today = await getTodayTodos(date)
      const overdue = await getOverdueTodos(date)
      const nextWeek = await getNextWeekTodos(date)
      if(!today.error && !overdue.error && !nextWeek.error){
        setTodos([
          { title: 'Zaległe', link: '/overdue', data: overdue.data },
          { title: 'Dzisiaj', link: '/today', data: today.data },
          { title: 'Następny tydzień', link: '/nextWeek', data: nextWeek.data },
        ])
      }

    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const orders = await getOrders()
      if(!orders.error){
        setOrders([
          { title: 'W realizacji', link: null, data: orders.data },
        ])
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const complaints = await getComplaints()
      if(!complaints.error){
        setComplaints([
          { title: 'Zgłoszone', link: null, data: complaints.data },
        ])
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <PartHeader text='Zadania' />
      <header className={`${classes.main} ${classes.flex}`}>
        {todos.map((item, key) => (
          <EntitySummary key={key} data={item} header="Lista zadań" />
        ))}
      </header>
      <PartHeader text='Reklamacje i zamówienia' />
      <header className={`${classes.main} ${classes.flex}`}>
        {orders.map((item, key) => (
          <EntitySummary key={key} data={item} header="Lista zamówień"/>
        ))}
        {complaints.map((item, key) => (
          <EntitySummary key={key} data={item} header="Lista reklamacji"/>
        ))}
      </header>
    </>
  )
}