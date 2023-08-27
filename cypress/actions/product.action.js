export class productActions{
    withValidData(name, description, buyingPrice, sellingPrice, stock, search){
        // directing to add product page
        cy.xpath('//*[@id="root"]/div/div/div[1]/div/a[6]/div/div/div').click();

        cy.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div[2]/a').click();

        // fill in the fields
        cy.xpath('//*[@id="nama"]').type(name);
        cy.xpath('//*[@id="deskripsi"]').type(description);
        cy.xpath('//*[@id="harga beli"]').type(buyingPrice);
        cy.xpath('//*[@id="harga jual"]').type(sellingPrice);
        cy.xpath('//*[@id="stok"]').type(stock);

        // temporary, because of multiple click problems

        // // search category 
        // cy.get('.css-r3uri8', { timeout: 10000 }).click({ retryOnStatusCodeFailure: true }, { multiple: true});
        // cy.get('.css-2s2hk4').type(search);
        // cy.get('.css-u3dlpe', { timeout: 10000 }).click({ retryOnStatusCodeFailure: true }, { multiple: true});

        // save
        cy.get('.css-l5lnz6', { timeout: 10000 }).click({ retryOnStatusCodeFailure: true }, { multiple: true});
    }
    withInvalidData(){
        // directing to add product page
        cy.xpath('//*[@id="root"]/div/div/div[1]/div/a[6]/div/div/div').click();

        cy.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div[2]/a').click();

        // fill in the fields with invalid data (empty)
        // save
        cy.get('.css-l5lnz6').click();
    }


}