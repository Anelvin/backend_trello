import express from 'express';
import BoardController from '../controller/BoardController';

const router = express.Router();

router.post('/create', BoardController.create);
router.post('/searchboards', BoardController.getUserBoards);
router.post('/searchbyid', BoardController.getBoardById);

export default router;