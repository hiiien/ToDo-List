import express from 'express';
import { listToDos, addToDo, changeToDo, removeToDo } from '../controllers/toDoControllers.js';


const router = express.Router();

router.get('/', listToDos);
router.post('/', addToDo);
router.patch('/:id', changeToDo);
router.delete('/:id', removeToDo);

export default router;