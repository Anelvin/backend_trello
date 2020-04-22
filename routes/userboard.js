import express from 'express';
import UserBoardController from '../controller/UserBoardController';
const router = express.Router();

router.post('/findbyuser', UserBoardController.findByUser);

export default router;