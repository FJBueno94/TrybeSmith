import { Request, Response } from 'express';
import ProductsService from '../services/products.services';

class ProductsController {
  constructor(private productsService = new ProductsService()) {}

  public create = async (req: Request, res: Response) => {
    const product = req.body;
    const newProduct = await this.productsService.create(product);
    return res.status(201).json(newProduct);
  };

  public getAll = async (req: Request, res: Response) => {
    const products = await this.productsService.getAll();
    return res.status(200).json(products);
  };
}

export default ProductsController;
