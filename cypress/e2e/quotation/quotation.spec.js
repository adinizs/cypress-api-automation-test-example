import { QuotationService } from "../../services/quotation/quotationService.js"
const quotation = new QuotationService();


describe('Scenarios from Quotation API', { tags: ['regression', 'quotation'] }, () => {
    it('Quotation - GET quotation with success', () => {
        quotation.getQuotation();
        quotation.validateQuotation();
    });
})