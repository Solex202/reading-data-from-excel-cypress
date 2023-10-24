describe('Handling tabs', function(){
    it('Approach 1', function(){
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example >a').invoke('removeAttr', 'target').click()
    })
})