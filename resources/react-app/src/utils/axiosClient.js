import axios from 'axios'
const AxiosClient = axios.create({
  baseURL: `https://a84b-212-154-113-110.eu.ngrok.io/api/`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default AxiosClient
