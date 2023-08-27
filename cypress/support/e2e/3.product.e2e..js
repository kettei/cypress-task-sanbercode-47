import 'cypress-xpath'
import { loginActions } from '../../actions/login.action';
import { productActions } from '../../actions/product.action';
import { productObjects } from '../../page-objects/product.objects';

// login scenario
describe('Add Product Scenario', () => {
    const login = new loginActions();
    const addProductStep = new productActions();
    const addProductObject = new productObjects();

    // add category
    describe('Add Product', () => {

        before(() => {
            cy.clearLocalStorage();
            login.withValidCredentials('irfansanbercode@maildrop.cc', '123456')
        });

        it('Add Product with valid data', () =>{
            setTimeout('16000')

            addProductStep.withValidData('Bandung Milk', 'Fresh Milk from Bandung', '5000', '10000', '99', 'Milk')
            addProductObject.successMessage().should("contain.text", "item ditambahkan");
        });

        before(() => {
            cy.clearLocalStorage();
            login.withValidCredentials('irfansanbercode@maildrop.cc', '123456')
        });

        it('Add Product with invalid data', () =>{
            setTimeout('16000')

            addProductStep.withInvalidData('Bandung Milk', 'Fresh Milk from Bandung', '5000', '10000', '99', 'Milk')
            addProductObject.errorMessage().should("contain.text", '"name" is not allowed to be empty');
        });
    })
})