import { Request, Response } from 'express';
import UsersService from '../services/users.services';

class UserController {
  constructor(private usersService = new UsersService()) {}

  public create = async (req: Request, res: Response) => {
    const user = req.body;
    const token = await this.usersService.create(user);
    return res.status(201).json({ token });
  };

  public login = async (req: Request, res: Response) => {
    try {
      const credentials = req.body;
      const token = await this.usersService.login(credentials);
      return res.status(200).json({ token });
    } catch (error: any) {
      return res.status(401).json({ message: error.message });
    }
  };
}

export default UserController;