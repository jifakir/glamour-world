import { shop } from '../../../products';

export default (req, res) => {
    const productId = req.query.id;
    console.log(productId);
    const product = shop.products.filter(item => item.id === Number(productId));
    console.log(product);
    return res.status(200).json(...product);
};