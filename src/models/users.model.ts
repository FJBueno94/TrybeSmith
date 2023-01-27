import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/users.interfaces';

export default class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async (user: User): Promise<User> => {
    const { username, classe, level, password } = user;
    const query = `INSERT INTO Trybesmith.Users
    (username, classe, level, password) VALUES (?, ?, ?, ?)`;
    const result = await this.connection.execute<ResultSetHeader>(
      query,
      [username, classe, level, password],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    const newUser = { id: insertId, username, classe, level, password };
    return newUser;
  };

  public login = async (credentials: User): Promise<User> => {
    const { username, password } = credentials;
    const query = 'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?';
    const [data] = await this.connection.execute(query, [username, password]);
    const [user] = data as User[];
    return user;
  };
}