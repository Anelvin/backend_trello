import express from 'express';
import TaskController from '../controller/TaskController';
const router = express.Router();

router.post('/create', TaskController.create);
router.post('/changeoflist', TaskController.changeoflist);

export default router;