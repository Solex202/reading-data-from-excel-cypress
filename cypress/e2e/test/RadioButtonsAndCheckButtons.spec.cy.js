describe('Check UI elements', ()=>{

    it('Checking Radio Buttons', ()=>{
        cy.visit("https://www.keynotesupport.com/internet/web-contact-form-example-radio-buttons.shtml") 

        cy.get(':nth-child(24) > input').should('be.visible')
        cy.get(':nth-child(26) > input').should('be.visible')
        cy.get(':nth-child(28) > input').should('be.visible')
        cy.get(':nth-child(30) > input').should('be.visible')

        cy.get(':nth-child(24) > input').check().should('be.checked')
        cy.get(':nth-child(26) > input').should('not.be.checked')
        cy.get(':nth-child(28) > input').should('not.be.checked')
        cy.get(':nth-child(30) > input').should('not.be.checked')
    })

    it.only('Checking check boxes', ()=>{
        cy.visit("https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/examples/checkbox-mixed/") 
        cy.get('.group_checkbox').check().should('be.checked') //select all check boxes 
        cy.get('.group_checkbox').first().check() //select first check box 
        cy.get('.group_checkbox').last().check() //select last check box 
        
    })
}) 