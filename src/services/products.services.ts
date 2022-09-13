import connection from '../models/connection';
import Product from '../interfaces/products.interfaces';
import ProductsModel from '../models/products.models';

class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public create = async (product: Product): Promise<Product> => {
    const result = await this.model.create(product);
    return result;
  };
}

export default ProductsService;
