let data
describe('Login into enum application', ()=>{

    before(()=>{
        cy.fixture('login').then((sel)=>{
          data = sel;
        })
      })

      it('should visit login page', ()=>{
        cy.visit('https://systest-app.enum.africa/login')
      })

      it('should fill in email', ()=>{
        cy.get(data.email).should('exist').type('2b7fa5bb-51e5-4631-bfdd-975adf7cfb3d@mailslurp.com')
      })
    
      it('should fill in password', ()=>{
        cy.get(data.password).should('exist').type('@yYchukwu123')
      })

      it('click the login button', ()=>{
    
        cy.get(data.loginButton).should('exist').click()
      })
      
      
})