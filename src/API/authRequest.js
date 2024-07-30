import axios from "axios";
;

const API = axios.create({ baseURL: process.env.REACT_APP_BACKEND_URL })
//auth
export const LoginMedthod = (data) => API.post('/api/auths/login', { data })
export const RegisterMedthod = (data) => API.post('/api/auths/resgister', { data })
