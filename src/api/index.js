import axios from "axios";

const loginConfig = {
    baseURL: 'http://localhost:8001',
    headers: {
        'Content-Type': 'application/json',
    }
}

axios.defaults.withCredentials = true
export const LoginAPIInstance = axios.create(loginConfig)

