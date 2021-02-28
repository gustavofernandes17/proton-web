import axios from "axios";

const developmentServer = "http://localhost:3333/alpha";

const api = axios.create({ baseURL: developmentServer });

export default api;
