import { Router } from 'express';
import TaskController from '../controllers/taskController.js';

const router = Router();

router.get('/', TaskController.list);
router.post('/', TaskController.add);
router.delete('/:id', TaskController.remove);

export default router;
