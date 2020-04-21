import express from 'express';
import BoardController from '../controller/BoardController';

const router = express.Router();

router.post('/create', BoardController.create);

export default router;