export class categoryActions{
    withValidData(name, description){
        // directing to add category page
        cy.xpath('//*[@id="root"]/div/div/div[1]/div/a[5]/div').click(); 
        cy.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div[2]/a').click();

        // fill in the fields
        cy.xpath('//*[@id="nama"]').type(name);
        cy.xpath('//*[@id="deskripsi"]').type(description);

        // save
        cy.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div[2]/button').click();
    }

    withInvalidData(name, description){
        // directing to add category page
        cy.xpath('//*[@id="root"]/div/div/div[1]/div/a[5]/div').click();
        cy.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div[2]/a').click();

        // fill in the fields with invalid data
        cy.xpath('//*[@id="nama"]').type(name).clear;
        cy.xpath('//*[@id="deskripsi"]').type(description).clear;

        // save
        cy.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div[2]/button').click();
    }
}