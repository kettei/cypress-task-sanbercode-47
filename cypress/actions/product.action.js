export class productActions{
    withValidData(name, description, buyingPrice, sellingPrice, stock, search){
        // directing to add product page
        cy.visit('/')
        cy.xpath('//*[@id="root"]/div/div/div[1]/div/a[6]/div').click();
        cy.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div[2]/a').click();

        // fill in the fields
        cy.xpath('//*[@id="nama"]').type(name);
        cy.xpath('//*[@id="deskripsi"]').type(description);
        cy.xpath('//*[@id="harga beli"]').type(buyingPrice);
        cy.xpath('//*[@id="harga jual"]').type(sellingPrice);
        cy.xpath('//*[@id="stok"]').clear().type(stock);
        cy.xpath('//*[@id="kategori"]').click();

        // search category
        cy.xpath('//*[@id="chakra-modal--body-525"]/div[1]/div/div/input').type(search);
        cy.xpath('//*[@id="chakra-modal--body-525"]/table/tbody/tr[1]/td').click();

        // save
        cy.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div[2]/button').click();
    }
    withInvalidData(name, description, buyingPrice, sellingPrice, stock, search){
        // directing to add product page
        cy.visit('/');
        cy.xpath('//*[@id="root"]/div/div/div[1]/div/a[6]/div').click();
        cy.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div[2]/a').click();

        // fill in the fields with invalid data
        cy.xpath('//*[@id="nama"]').type(name).clear;
        cy.xpath('//*[@id="deskripsi"]').type(description);
        cy.xpath('//*[@id="harga beli"]').type(buyingPrice);
        cy.xpath('//*[@id="harga jual"]').type(sellingPrice);
        cy.xpath('//*[@id="stok"]').clear().type(stock);
        cy.xpath('//*[@id="kategori"]').click();

        // search category
        cy.xpath('//*[@id="chakra-modal--body-525"]/div[1]/div/div/input').type(search);
        cy.xpath('//*[@id="chakra-modal--body-525"]/table/tbody/tr[1]/td').click();

        // save
        cy.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div[2]/button').click();
    }


}