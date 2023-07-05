
export class Products {
    getProducts() {
        cy.request({
            method: 'GET',
            url: `${Cypress.config().baseUrl}/products`,
        }).then((res) => {
            cy.wrap(res).as('response');
        })
    }

    getSingleProduct() {
        cy.request({
            method: 'GET',
            url: `${Cypress.config().baseUrl}/products/1`,
        }).then((res) => {
            cy.wrap(res).as('response');
        })
    }

    postAddProduct() {
        cy.request({
            method: 'POST',
            url: `${Cypress.config().baseUrl}/products/add`,
            body: {
                    "id": 700,
                    "title": "iPhone 16",
                    "description": "An apple mobile which is nothing like apple",
                    "price": 549,
                    "discountPercentage": 12.96,
                    "rating": 4.69,
                    "stock": 94,
                    "brand": "Apple",
                    "category": "smartphones",
                    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
                    "images": [
                        "https://i.dummyjson.com/data/products/1/1.jpg",
                        "https://i.dummyjson.com/data/products/1/2.jpg",
                        "https://i.dummyjson.com/data/products/1/3.jpg",
                        "https://i.dummyjson.com/data/products/1/4.jpg",
                        "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
                    ]
            }
        }).then((res) => {
            cy.wrap(res).as('response');
        })
    }

    deleteProduct() {
        cy.request({
            method: 'DELETE',
            url: `${Cypress.config().baseUrl}/products/1`,
        }).then((res) => {
            cy.wrap(res).as('response');
        })
    }

    validateProducts(){
        cy.get('@response').then((res) => {
            expect(res.status).to.eq(200)
        })
    }

    validateError(){
        cy.get('@response').then((res) => {
            expect(res.status).to.eq(204)
        })
    }
}