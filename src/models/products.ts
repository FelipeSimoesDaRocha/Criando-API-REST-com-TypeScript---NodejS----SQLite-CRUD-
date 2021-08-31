import { dbQuery, dbQueryFirst } from "../services/db"

export type Product = {
    id: number;
    name: string;
    price: number;
}
 
export const insertProduct = async (product: Product) => {
    await dbQuery(`INSERT INTO product (name, price) VALUES(?, ?)`, [product.name, product.price])
    let retorno = await dbQuery(`SELECT seq AS Id FROM sqlite_sequence WHERE  name = 'product'`);
    return (retorno[0].Id); 
}