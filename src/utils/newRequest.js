import axios from "axios";

const newRequest = axios.create({
    baseURL:"https://gaminghaven-backend.onrender.com",  withCredentials: true,
})

export default newRequest
