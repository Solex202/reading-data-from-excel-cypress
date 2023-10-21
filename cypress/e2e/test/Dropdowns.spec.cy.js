describe('handle dropdown', ()=>{
    it.only  ('Dropdown with select', ()=>{
        cy.visit('https://www.zoho.com/commerce/free-demo.html')

        cy.get('#zcf_address_country')
        .select('India')
        .should('have.value', 'Italy')

        //  
    })

    it('Dropdown without select', ()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

        // cy.get('#zcf_address_country')
    })     
})