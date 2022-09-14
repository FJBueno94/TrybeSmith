import connection from '../models/connection';
import Order from '../interfaces/orders.interfaces';
import OrdersModel from '../models/orders.models';

class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public getAll = async (): Promise<Order[]> => {
    const orders = await this.model.getAll();
    return orders;
  };
}

export default OrdersService;