import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import init from "./utils/mongoose.js";
import router from "./routes/router.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', router);

console.clear();
init();

app.listen(PORT, () => {
    console.log(`Server | Listening on ${PORT}`);
});