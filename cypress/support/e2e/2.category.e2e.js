import 'cypress-xpath'
import { loginActions } from '../../actions/login.action';
import { categoryActions } from '../../actions/category.action';
import { categoryObjects } from '../../page-objects/category.objects';

// login scenario
describe('Add Category Scenario', () => {
    const login = new loginActions();
    const addCategoryStep = new categoryActions();
    const addCategoryObject = new categoryObjects();

    beforeEach(() => {
        cy.clearLocalStorage();
        login.withValidCredentials('irfansanbercode@maildrop.cc', '123456')
    });

    // add category
    describe('Add Category', () => {
        it('with valid data', () =>{
            setTimeout('16000')

            addCategoryStep.withValidData('Milk', 'Fresh Milk');
            addCategoryObject.categorySuccessMessage().should('contain.text', 'item ditambahkan'); // always failed to assert this
        });
    })

    describe('Add Category', () => {
        it('with invalid data', () =>{
            setTimeout('16000')

            addCategoryStep.withInvalidData();
            addCategoryObject.categoryErrorMessage().should('contain.text', '"name" is not allowed to be empty'); // always failed to assert this
        });
    })
})