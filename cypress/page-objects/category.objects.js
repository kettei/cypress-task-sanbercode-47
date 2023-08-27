import 'cypress-xpath';

export class categoryObjects{
    categorySuccessMessage(){
        return cy.xpath('//*[@id="toast-5-title"]')
    }

    categoryErrorMessage(){
        return cy.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div[2]/div[1]')
    }
}