
export class QuotationService {
    getQuotation() {
        cy.request({
            method: 'GET',
            url: `${Cypress.config().baseUrl}/example/api/quotation`,
            headers: {
                "Authorization": `Bearer ${Cypress.config().token}`
            }
        }).then((res) => {
            cy.wrap(res).as('response');
        })
    }

    validateQuotation() {
        cy.get('@response').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.message).to.eq("success");
            expect(response.body.field.example).to.eq("example of validation");
        })
    }
}