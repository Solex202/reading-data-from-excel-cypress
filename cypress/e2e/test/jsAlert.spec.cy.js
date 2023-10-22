describe('Alerts', ()=>{
    it('js alert', function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsAlert()']").click() 
        cy.on('window:alert', (t)=>{
            expect(t).to.contains('I am a js Alert')
        })

        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })

    it('js confirm alert', function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsAlert()']").click() 
        cy.on('window:confirm', (t)=>{ 
            expect(t).to.contains('I am a js Confirm')
        })

        //cypress automatically close the alert window by using ok button(default)

        cy.get('#result').should('have.text', 'You clicked: Ok')

    })

    it('js confirm alert - cancel ', function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        
        cy.get("button[onclick='jsAlert()']").click() 
        cy.on('window:confirm', (t)=>{ 
            expect(t).to.contains('I am a js Confirm')
            })

        cy.on('window:confirm', ()=> false) // cypress closes alert window using cancel button    
        
        cy.get('#result').should('have.text', 'You clicked: Cancel')
        
    })

    it('js prompt alert - ', function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win)=>{
            cy.stub(win, 'prompt').returns('welcome')
        })

        cy.get("button[onclick='jsPrompt()']").click()
        
        cy.get('#result').should('have.text', 'You entered: welcome')

    })

    it('js authenticated alert - ', function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win)=>{
            cy.stub(win, 'prompt').returns('welcome')
        })

        cy.get("button[onclick='jsPrompt()']").click()
        
        cy.get('#result').should('have.text', 'You entered: welcome')

    })
})