import express from 'express';
import { validateUserInput } from '../middlewares/usersMiddleware.js';
import { basicAuth } from '../middlewares/basicAuth.js';
import { getUsers, createUser, getUserById, updateUser,
  deleteUser, } from '../controllers/usersController.js';

const router = express.Router();

router.get('/', basicAuth, getUsers);
router.post('/', basicAuth, validateUserInput, createUser);
router.get('/:userId', basicAuth, getUserById);
router.put('/:userId', basicAuth, updateUser);
router.delete('/:userId', basicAuth, deleteUser);


export default router;