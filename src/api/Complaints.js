import axios from 'axios';
import {resolve} from './Resolve'
import { API_URL } from './BasicUrl'

export async function getComplaints() {
  return await resolve(axios.get(
    `${API_URL}/complaints.json`
  )
    .then(res => res.data))
}
