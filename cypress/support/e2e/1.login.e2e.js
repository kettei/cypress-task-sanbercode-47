import 'cypress-xpath'
import { loginActions } from '../../actions/login.action';
import { loginObjects } from '../../page-objects/login.objects';

// login scenario
describe('Login Scenario', () => {
    const loginStep = new loginActions();
    const loginObject = new loginObjects();

    describe('Login with valid credentials', () => {
        it('Successfull login', () =>{
            cy.clearLocalStorage();
            setTimeout('16000')
            loginStep.withValidCredentials('irfansanbercode@maildrop.cc', '123456');
            loginObject.shopHeaders().should('contain.text', "Irfan Sanbercode")
        });

        it('Login Failed', () =>{
            cy.clearLocalStorage();
            setTimeout('16000')
            loginStep.withValidCredentials('irfansanbercode@maildrop.cc', '123');
            loginObject.errorLogin().should("contain.text", "Kredensial yang Anda berikan salah")
        });
    });
});