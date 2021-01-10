import axios from 'axios';
import {resolve} from './Resolve'
import { API_URL } from './BasicUrl'

export async function getMachinesGroups() {
  return await resolve(axios.get(
    `${API_URL}/machines_groups.json`
  )
    .then(res => res.data))
}
