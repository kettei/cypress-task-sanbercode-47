import 'cypress-xpath'
import { loginActions } from '../../actions/login.action';
import { productActions } from '../../actions/product.action';
import { productObjects } from '../../page-objects/product.objects';

// login scenario
describe('Add Product Scenario', () => {
    const login = new loginActions();
    const addProductStep = new productActions();
    const addProductObject = new productObjects();

    beforeEach(() => {
        cy.clearLocalStorage();
        login.withValidCredentials('irfansanbercode@maildrop.cc', '123456')
    });

    // add category
    describe('Add Product', () => {
        it('with valid data', () =>{
            setTimeout('16000')

            addProductStep.withValidData('Bandung Milk', 'Fresh Milk from Bandung', '5000', '10000', '99', 'Milk')
            addProductObject.errorMessage().should("contain.text", '"category_id" is required');
        });
    })

    describe('Add Product', () => {   
        it('with invalid data', () =>{
            setTimeout('16000')

            addProductStep.withInvalidData()
            addProductObject.errorMessage().should("contain.text", '"name" is not allowed to be empty');
        });
    })
})