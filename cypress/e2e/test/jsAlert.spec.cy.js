describe('Alerts', ()=>{
    it('js alert', function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsAlert()']").click() 
        cy.on('window:alert', (t)=>{
            expect(t).to.contains('I am a js Alert')
        })

        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })
})