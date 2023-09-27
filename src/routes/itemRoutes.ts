import { Router } from 'express';
import {
  getItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} from '../controllers/itemController';
import { authenticate } from '../middleware/authMiddleware';

const itemRouter = Router();

itemRouter.get('/get', authenticate, getItems);
itemRouter.get('/get/:id', authenticate, getItemById);
itemRouter.post('/create', authenticate, createItem);
itemRouter.put('/update/:id', authenticate, updateItem);
itemRouter.delete('/delete/:id', authenticate, deleteItem);

export default itemRouter;
