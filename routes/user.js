import express from 'express';
import UserController from '../controller/UserController';
import token from '../middleware/authentication';

const router = express.Router();

router.get('/', token.verifyToken, UserController.getUsers);
router.post('/create', UserController.create);
router.post('/signin', UserController.signIn);

export default router;