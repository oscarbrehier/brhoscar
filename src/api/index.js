import axios from "axios";

const url = 'http://localhost:5000/login';

export const login = (data) => axios.post(url, data);