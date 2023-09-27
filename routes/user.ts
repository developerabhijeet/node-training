
import express, { Router } from 'express';
import { getUsers, createUsers, getUser, updateUser, deleteUser } from '../controllers/controllers'
const router: Router = express.Router();

router.get('/user', getUsers);
router.post('/users', createUsers);
router.get('/users/:id', getUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;
