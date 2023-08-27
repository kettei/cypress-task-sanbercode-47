import 'cypress-xpath'
import { loginActions } from '../../actions/login.action';
import { categoryActions } from '../../actions/category.action';
import { categoryObjects } from '../../page-objects/category.objects';

// login scenario
describe('Add Category Scenario', () => {
    const login = new loginActions();
    const addCategoryStep = new categoryActions();
    const addCategoryObject = new categoryObjects();

    // add category
    describe('Add Category', () => {

        before(() => {
            cy.clearLocalStorage();
            login.withValidCredentials('irfansanbercode@maildrop.cc', '123456')
        });

        it('Add Category with valid data', () =>{
            setTimeout('16000')

            addCategoryStep.withValidData('Milk', 'Fresh Milk');
            addCategoryObject.categorySuccessMessage().should('contain.text', 'success'); // always failed to assert this
        });

        before(() => {
            cy.clearLocalStorage();
            login.withValidCredentials('irfansanbercode@maildrop.cc', '123456')
        });

        it('Add Category with invalid data', () =>{
            setTimeout('16000')

            addCategoryStep.withInvalidData('Milk', 'Fresh Milk');
            addCategoryObject.categoryErrorMessage().should('have.text', '"name" is not allowed to be empty');
        });
    })
})