import axios from "axios";
import config from "../config";

const url = 'http://localhost:5000/post';

export const postPost = (body) => axios({
    url: url,
    method: 'POST',
    headers: config.brhoscar.token,
    data: body
});