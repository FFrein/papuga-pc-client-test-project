import axios from "axios";

export const WS_URL = "ws://localhost:5000"
const $ws = axios.create({
    withCredentials: true,
    baseURL:WS_URL
})

export default $ws;