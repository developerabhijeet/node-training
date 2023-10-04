
import express, { Router } from 'express';
import { create, update, fetchproduct, deleteProduct } from '../controllers/controllers';

const router: Router = express.Router();
const auth =require('../middleware/auth.js')
router.get('/product', fetchproduct)
router.post('/product', create)
router.put('/product/:id', update)
router.delete('/product/:id', deleteProduct)
export default router;