import 'cypress-xpath';

export class loginObjects{
    errorLogin(){
        return cy.xpath('//*[@id="root"]/div/div/div/div[2]/div/div[1]');
    }

    websiteHeaders(){
        return cy.xpath('//*[@id="root"]/div/div/div[1]/div/h3')
    }

    shopHeaders(){
        return cy.xpath('//*[@id="root"]/div/div/div/div[2]/div/div[1]/div[1]/div/dl/dt')
    }
}