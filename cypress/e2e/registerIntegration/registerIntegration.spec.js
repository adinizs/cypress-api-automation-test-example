import { RegisterIntegration } from "../../services/register/registerIntegration"
const register = new RegisterIntegration();


describe('Cenários da suite de testes "Register"', { tags: ['regression', 'register'] }, () => {
    it('Register - Success without limit', () => {
        register.postRegisterIntegrationSuccessWithoutLimit();
        register.validateRegisterWithoutLimit();
    });
})