import axios from 'axios'

const Api = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3333' : 'https://fakeairbnb.herokuapp.com'
})

export default Api