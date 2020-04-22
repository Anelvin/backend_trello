import express from 'express';
import TaskListController from '../controller/TaskListController';
const router = express.Router();

router.post('/create', TaskListController.create);
router.post('/findtasklist', TaskListController.findByBoard);

export default router;