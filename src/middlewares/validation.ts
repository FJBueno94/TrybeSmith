import { NextFunction, Request, Response } from 'express';

const loginValidation = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(400).json({ message: '"username" is required' });
  }
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  next();
};

export default loginValidation;