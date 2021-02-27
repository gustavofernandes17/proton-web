import axios from 'axios'; 


const developmentServer = 'http://192.168.0.134:3000/alpha'

const api = axios.create({baseURL: developmentServer});

export default api; 