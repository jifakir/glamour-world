import { shop } from '../../../products';

export default (req, res) => {
    return res.status(200).json(shop.products);
};