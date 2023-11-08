describe('Navigation', function (){
    it('Navigation test', function (){
        cy.visit('https://demo.opencart.com/')

        cy.get(':nth-child(7) > .nav-link').click()

        cy.get('h2').should('have.text', 'Cameras')

        cy.wait(4000)

        cy.go("back")
        cy.wait(4000)
        cy.go("forward")
        cy.wait(4000)
        cy.go(-1)
        cy.wait(4000)
        cy.reload()
    })
})