export class productObjects{
    successMessage(){
        return cy.get('.css-zycdy9')
    }

    errorMessage(){
        return cy.get('.css-qwanz3')
    }
}