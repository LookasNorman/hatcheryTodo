import axios from 'axios';
import {resolve} from './Resolve'
import { API_URL } from './BasicUrl'

export async function getTodayTodos(date) {
  return await resolve(axios.get(
    `${API_URL}/todos.json?date=${date}&exists[endDate]=false`
  )
    .then(res => res.data))
}

export async function getOverdueTodos(date) {
  return await resolve(axios.get(
    `${API_URL}/todos.json?date[strictly_before]=${date}&exists[endDate]=false`
  )
    .then(res => res.data))
}

export async function getNextWeekTodos(date) {
  return await resolve(axios.get(
    `${API_URL}/todos.json?date[strictly_after]=${date}&exists[endDate]=false`
  )
    .then(res => res.data))
}
