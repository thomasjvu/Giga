import axios from "axios"

const newRequest = axios.create({
    // baseURL: "http://localhost:1024",
    baseURL: "https://giga-server.cyclic.app",
    withCredentials: true,
})

export default newRequest
