export class loginObjects{
    errorLogin(){
        return cy.get('.css-qwanz3');
    }

    websiteHeaders(){
        return cy.get('.css-1wswht5')
    }

    shopHeaders(){
        return cy.get('.css-14go5ty')
    }
}