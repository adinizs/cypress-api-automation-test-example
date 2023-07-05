import { Products } from "../../services/products/products"
const products = new Products();


describe('GET Products', { tags: ['regression', 'products'] }, () => {
    it('Products - Get all products', { tags: ['get-products'] }, () => {
        products.getProducts();
        products.validateProducts();
    });

    it('Products - Get single product', { tags: ['get-products'] }, () => {
        products.getSingleProduct();
        products.validateProducts();
    });

    it('Products - Add product', { tags: ['add-product'] }, () => {
        products.postAddProduct();
        products.validateProducts();
    });

    it('Products - Delete product', { tags: ['delete-product'] }, () => {
        products.deleteProduct();
        products.validateError();
    });
})