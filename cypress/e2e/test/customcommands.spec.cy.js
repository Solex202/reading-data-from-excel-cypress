describe('Custom commands', function (){

    it.only('Handling links', function (){
        cy.visit('https://demo.nopcommerce.com/')

        cy.clickLink('Apple Macbook Pro 13-inch')
    })

    it('Overwrite existing command', function (){

    })

    it('Login command', function (){

    })
})