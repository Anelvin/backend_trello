import express from 'express';
import TaskController from '../controller/TaskController';
const router = express.Router();

router.post('/create', TaskController.create);

export default router;