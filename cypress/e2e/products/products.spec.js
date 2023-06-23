import { Products } from "../../services/products/products"
const products = new Products();


describe('GET Products', { tags: ['regression', 'products'] }, () => {
    it('Products - Get all products', () => {
        products.getProducts();
    });
})