import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3000/api"
})

const articles = [
    { id: 1, title: '', resume: '' },
    { id: 2, title: '', resume: '' },
    { id: 3, title: 'Extreme Programming', resume: 'Continuando a ideia de simplesmente colocar aqui o que venho pensando e analisando, para rever futuramente.' }
]



