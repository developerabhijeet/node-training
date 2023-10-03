import express from 'express';
import { loginUser, singupUser } from './user-controller.js'
import { paginations } from './item-controller.js'

const router = express.Router();

router.post('/login', loginUser);
router.post('/signup', singupUser);
router.post('/paginations', paginations);

export default router;