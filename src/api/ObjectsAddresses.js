import axios from 'axios';
import {resolve} from './Resolve'
import { API_URL } from './BasicUrl'

export async function getObjectsAddresses() {
  return await resolve(axios.get(
    `${API_URL}/object_addresses.json`
  )
    .then(res => res.data))
}
