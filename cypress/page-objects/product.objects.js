import 'cypress-xpath';

export class productObjects{
    successMessage(){
        return cy.xpath('//*[@id="chakra-toast-manager-top-right"]')
    }

    errorMessage(){
        return cy.xpath('//*[@id="root"]/div/div/div/div[2]/div[2]/div[1]')
    }
}