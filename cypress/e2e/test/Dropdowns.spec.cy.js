describe('handle dropdown', ()=>{
    it.skip('Dropdown with select', ()=>{
        cy.visit('https://www.zoho.com/commerce/free-demo.html')
 
        cy.get('#zcf_address_country')
        .select('India')
        .should('have.value', 'Italy')

    })

    it.skip('Dropdown without select', ()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

        cy.get('#select2-billing_country-container').click()
        

        cy.get('.select2-search__field').type('Italy').type('{enter}') 
        cy.get('#select2-billing_country-container').should('have.text', 'Italy')
 
    })    
    
    it.skip('Auto suggest Dropdown', ()=>{
        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('Delhi')

        cy.get('.suggestion-title').contains('Delhi University').click()

    })

    it.only('Automate dynamic Dropdown', ()=>{
        cy.visit('https://www.google.com/')
        cy.get("input[name='q']").type('cypress automation tool')

        cy.get('div.wM6w7d>span').should('have.length', 11)
        cy.get('div.wM6w7d>span').each(($el, index, $list)=>{
            if($el.text() == 'cypress automation'){
                 cy.wrap($el).click()
            }
        }) 

        cy.get("input[name='q']").should('have.should', 'cypress automation tool')

    })
})