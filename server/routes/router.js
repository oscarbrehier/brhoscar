import express from 'express';
const router = express.Router();
import { login } from "../controllers/auth.js";

router.get('/login', login);
router.get('/status', (req, res) => {

    res.json({
        message: 'Success',
        status: 200
    });

});

export default router;