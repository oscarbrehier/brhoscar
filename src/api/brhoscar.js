import axios from "axios";

const url = 'https://brhoscar-api.herokuapp.com/post';

export const postPost = (body) => axios({
    url: url,
    method: 'POST',
    headers: config.brhoscar.token || process.env.token,
    data: body
});


export const getPosts = async () => {

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            token: config.brhoscar.token
        }
    });

    const jsonResponse = await response.json();
    return jsonResponse;

}
