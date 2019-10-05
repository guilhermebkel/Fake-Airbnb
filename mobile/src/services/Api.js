import axios from 'axios'

const Api = axios.create({
    //baseURL: process.env.NODE_ENV === 'development' ? 'http://192.168.1.15:3333' : 'https://fakeairbnbapp.herokuapp.com'
    baseURL: 'https://fakeairbnbapp.herokuapp.com'
})

export default Api