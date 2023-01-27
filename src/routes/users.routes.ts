import { Router } from 'express';
import UsersController from '../controllers/users.controllers';
import loginValidation from '../middlewares/validation';

const router = Router();

const usersController = new UsersController();

router.post('/users', usersController.create);
router.post('/login', loginValidation, usersController.login);

export default router;