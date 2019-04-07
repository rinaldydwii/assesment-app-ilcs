import axios from 'axios';
import API from './constant';

const request = axios.create({
    baseURL: API.BASE_URL,
    timeout: 60 * 5 * 1000,
    headers: {
        "Access-Control-Allow-Origin": "assesment-app-rinaldydwii"
    }
});

export default request;