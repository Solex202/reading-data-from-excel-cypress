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
}) 