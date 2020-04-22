import express from 'express';
import RoleController from '../controller/RoleController';

const router = express.Router();

router.get('/', RoleController.getRoles);
router.get('/:id', RoleController.getRole);
router.post('/insert', RoleController.create);

export default router;