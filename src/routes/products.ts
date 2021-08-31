import { badRequest } from "../services/util";
import { Product,} from '../models/products';

const insertProduct = (req: Request, res: Response) => {
  {
    const product = req.body.product;
    if (!product) 
    return badRequest(res, "Produto invalido");

    if (!product.name) 
    return badRequest(res, "Informe o nome do produto");

    if (!validateNumber(product.price))
      return badRequest(res, "Informe o preço");
  }
};
