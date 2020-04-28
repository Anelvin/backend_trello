import express from 'express';
import BackgroundController from '../controller/BackgroundController';

const router = express.Router();

router.post('/create', BackgroundController.create);
router.post('/findall', BackgroundController.findAll);
router.post('/findbyid', BackgroundController.findById);

export default router;