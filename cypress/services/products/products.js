
export class Products {
    postRegisterIntegrationSuccessWithoutLimit() {
        const pure = require('pure-gen');
        const cnpj = pure.document.brazilianCompanyNumber();
        const email = pure.internet.email();
        cy.request({
            method: 'POST',
            url: `${Cypress.config().baseUrl}/register/integration`,
            headers: {
                "Authorization": `Basic ${Cypress.config().basicAuthorization}`
            },
            body: {
                "document": cnpj,
                "email": email
            }
        }).then((res) => {
            cy.wrap(res).as('response');
        })
    }

    getProducts() {
        cy.request({
            method: 'GET',
            url: `${Cypress.config().baseUrl}/products`,
        }).then((res) => {
            cy.wrap(res).as('response');
        })
    }

    validateRegisterWithoutLimit() {
        cy.get('@response').then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.message).to.eq("success");
            // expect(response.body.analysis.limit).to.eq("0.000");
        })
    }
}