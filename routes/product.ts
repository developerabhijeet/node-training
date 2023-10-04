
import express, { Router } from 'express';
// import { getUsers, createUsers, getUser, updateUser, deleteUser } from '../controllers/controllers'
import { create, update, fetch, deleteProduct } from '../controllers/controllers';
// import { UserInterface } from '../modal/userModel'
const router: Router = express.Router();
const auth =require('../middleware/auth.js')
// router.get('/user', getUsers);
// router.post('/users', createUsers);
// router.get('/users/:id', getUser);
// router.put('/users/:id', updateUser);
// router.delete('/users/:id', deleteUser);

// export default router;

router.get('/product', fetch)
// router.get('/user/:id',fetchSingleUser);
router.post('/product', create)
router.put('/product/:id', update)
router.delete('/product/:id', deleteProduct)

// router.post('/register',register)
// router.post('/login',auth,login)

router.post("/welcome", (req, res) => {
    res.status(200).send("Welcome 🙌 ");
  });
export default router;