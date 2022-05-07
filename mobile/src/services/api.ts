import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://172.21.176.237:3333'
})
