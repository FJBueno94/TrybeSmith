import { Request, Response } from 'express';
import UsersService from '../services/users.services';

class UserController {
  constructor(private usersService = new UsersService()) {}

  public create = async (req: Request, res: Response) => {
    const user = req.body;
    const token = await this.usersService.create(user);
    return res.status(201).json({ token });
  };
}

export default UserController;