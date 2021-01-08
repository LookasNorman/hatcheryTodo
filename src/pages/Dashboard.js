import React from 'react'
import { useEffect, useState } from 'react'
import { getNextWeekTodos, getOverdueTodos, getTodayTodos } from '../api/Todos'
import { getComplaints } from '../api/Complaints'
import { getOrders } from '../api/Orders'
import DashboardPart from '../components/DashbordPart'

export default function Dashboard() {
  const [todos, setTodos] = useState([])
  const [orders, setOrders] = useState( [])
  const [complaints, setComplaints] = useState([])

  useEffect(() => {
    var today = new Date(),
      date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    const fetchData = async () => {
      const today = await getTodayTodos(date)
      const overdue = await getOverdueTodos(date)
      const nextWeek = await getNextWeekTodos(date)
      if (!today.error && !overdue.error && !nextWeek.error) {
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
      if (!orders.error) {
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
      if (!complaints.error) {
        setComplaints([
          { title: 'Zgłoszone', link: null, data: complaints.data },
        ])
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <DashboardPart title="Zadania" data={todos} link="/addTodo"/>
      <DashboardPart title="Zamówienia" data={orders} link="/addOrder"/>
      <DashboardPart title="Reklamacje" data={complaints} link="/addComplaint"/>
    </>
  )
}