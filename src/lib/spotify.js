import axios from 'axios';
import qs from 'qs';
import config from '../config';

const clientID = config.spotify.client_id;
const clientSecret = config.spotify.client_secret;
const refreshToken = config.spotify.refresh_token;

const basic = Buffer.from(`${clientID}:${clientSecret}`).toString("base64");
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

const data = qs.stringify({
    'grant_type': 'refresh_token',
    'refresh_token': refreshToken
});

const aConfig = {
    method: 'post',
    url: TOKEN_ENDPOINT,
    headers: {
        'Authorization': `Basic ${basic}`
    },
    data: data
};

const getAccessToken = async () => {

    const promise = axios(aConfig);
    return promise.then((response) => response.data);

}

export default getAccessToken;







