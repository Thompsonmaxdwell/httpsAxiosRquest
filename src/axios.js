import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com',
})
instance.defaults.headers.common['Auth'] = 'Auth Token From Instance'

export default instance