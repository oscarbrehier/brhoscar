import mongoose from 'mongoose';
import config from '../config.js';

function init() {

    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };

    const url = `mongodb+srv://${config.db.username}:${config.db.password}@cluster01.by2xl.mongodb.net/test`;

    mongoose.connect(url, options);

    mongoose.connection.on('connected', () => {

        console.log('Mongoose | Connected');

    });

    mongoose.connection.on('err', err => {

        console.log(`Mongoose | Erorr: \n${err.stack}`);

    });

    mongoose.connection.on('disconnected', () => {

        console.log('Mongoose | Disconnected');

    });

}

export default init;