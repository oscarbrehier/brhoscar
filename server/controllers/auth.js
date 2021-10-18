import config from "../config.js";

export const login = async (req, res) => {

    const { username, password } = req.body;

    if(username === config.username && password === config.password) {

        console.log('Logged In');

    }

}