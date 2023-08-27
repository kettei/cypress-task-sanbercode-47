export class loginActions{
    withValidCredentials(email, password){
        cy.visit('/');
        cy.xpath('//*[@id="email"]').type(email)
        cy.xpath('//*[@id="password"]').type(password);
        cy.xpath('//*[@id="root"]/div/div/div/div[2]/div/button').click();
    }
}