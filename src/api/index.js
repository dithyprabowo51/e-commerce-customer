import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-cms-server-adit.herokuapp.com'
})

export default instance
