import jwt, { SignOptions } from 'jsonwebtoken';
import User from '../interfaces/users.interfaces';

const secret = 'segredosecreto';
const options: SignOptions = { expiresIn: '1d', algorithm: 'HS256' };

const createToken = (payload: User) => jwt.sign(payload, secret, options);

const verifyToken = (token: string) => jwt.verify(token, secret, options);

export = {
  createToken,
  verifyToken,
};
