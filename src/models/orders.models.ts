import { Pool } from 'mysql2/promise';
import Order from '../interfaces/orders.interfaces';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  // https://mariadb.com/kb/en/json_arrayagg/
  public getAll = async (): Promise<Order[]> => {
    const query = `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS 
      productsIds FROM Trybesmith.Orders AS o INNER JOIN Trybesmith.Products AS p
      ON o.id = p.orderId GROUP BY o.id ORDER BY o.userId;`;
    const [result] = await this.connection.execute(query);
  
    return result as Order[];
  };
}
