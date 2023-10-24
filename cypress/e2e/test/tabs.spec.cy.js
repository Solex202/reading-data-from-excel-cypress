describe('Handling tabs', function(){
    it('Approach 1', function(){
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example >a').invoke('removeAttr', 'target').click()

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')

        cy.go('back') //back to parent tab
    })

    it('Approach 2', function(){
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example >a').invoke('removeAttr', 'target').click()


    })
})