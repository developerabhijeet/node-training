import { Router } from 'express';
import {
  createItem,
  getItems,
  updateItem,
  deleteItem,
} from '../controllers/item.controller';

const router: Router = Router();

router.post('/products', createItem);
router.get('/products', getItems);
router.put('/products/:id', updateItem);
router.delete('/products/:id', deleteItem);

export default router;