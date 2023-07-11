import axios from "axios"

const newRequest = axios.create({
    baseURL: import.meta.env.VITE_SERVER_BASE_URL,
    // baseURL: "https://giga-server.cyclic.app",
    withCredentials: true,
})

export default newRequest
