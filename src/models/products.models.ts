import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/products.interfaces';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async (product: Product): Promise<Product> => { 
    const { name, amount } = product;
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const result = await this.connection.execute<ResultSetHeader>(query, [name, amount]);
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    const newProduct = { id: insertId, name, amount };
    return newProduct;
  };
}