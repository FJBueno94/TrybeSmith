import UsersModel from '../models/users.model';
import connection from '../models/connection';
import User from '../interfaces/users.interfaces';
import Token from '../helpers/token';

class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public create = async (user: User): Promise<string> => {
    const result = await this.model.create(user);
    const token = Token.createToken(result);
    return token;
  };

  public login = async (credentials: User): Promise<string> => {
    const result = await this.model.login(credentials);
    if (!result) {
      throw new Error('Invalid username or password');
    }
    const token = Token.createToken(result);
    return token;
  };
}

export default UsersService;