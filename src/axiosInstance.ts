import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.GATSBY_API_URL,
})

export default axiosInstance;