import axios from "axios";

const url = 'https://brhoscar-api.herokuapp.com/post';

export const getPosts = async () => {

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            token: process.env.token
        }
    });

    const jsonResponse = await response.json();
    return jsonResponse;

}
