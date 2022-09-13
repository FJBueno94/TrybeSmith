import { Request, Response } from 'express';
import ProductsService from '../services/products.services';

class ProductsController {
  constructor(private productsService = new ProductsService()) {}

  public create = async (req: Request, res: Response) => {
    const product = req.body;
    const newProduct = await this.productsService.create(product);
    res.status(201).json(newProduct);
  };
}

export default ProductsController;
