let data

describe("Assertions for enum", function()
{
    before(()=>{
        cy.fixture('login').then((sel)=>{
          data = sel;
        })
      })    
  
    it('Implicit assertions', 
    function(){


        cy.visit("https://systest.enum.africa/")
         cy.url().should('include', 'enum.africa')
                    .and ('eq', 'https://systest.enum.africa/')
                    .and('contain', 'systest')
                    .and('not.contain', 'sytest')
 

         cy.get('.getStarted > .font-weight-bold').should('be.visible')
            .and('exist')           
         cy.get(':nth-child(2) > .font-weight-bold > .v-btn__content > .tw-normal-case').should('be.visible')
            .and('exist')           
         cy.get('.landing-image').should('be.visible')
            .and('exist')           
         cy.get('.tw-mb-4 > .tw-flex > svg > [d="M40.5347 28.3894C39.1068 28.3894 37.8778 28.1002 36.8476 27.5218C35.8234 26.9374 35.0341 26.1121 34.4798 25.0457C33.9256 23.9733 33.6484 22.7051 33.6484 21.2411C33.6484 19.8132 33.9256 18.5601 34.4798 17.4817C35.0341 16.4033 35.8143 15.5628 36.8204 14.9603C37.8326 14.3579 39.0195 14.0566 40.381 14.0566C41.2968 14.0566 42.1493 14.2042 42.9385 14.4995C43.7338 14.7886 44.4266 15.2254 45.017 15.8098C45.6135 16.3942 46.0774 17.1292 46.4088 18.0149C46.7401 18.8945 46.9058 19.9247 46.9058 21.1055V22.1629H35.1847V19.7771H43.2819C43.2819 19.2228 43.1614 18.7318 42.9205 18.3041C42.6795 17.8763 42.3451 17.5419 41.9173 17.3009C41.4956 17.0539 41.0046 16.9304 40.4443 16.9304C39.8599 16.9304 39.3418 17.066 38.8899 17.3371C38.4441 17.6022 38.0947 17.9606 37.8416 18.4125C37.5886 18.8583 37.4591 19.3554 37.453 19.9036V22.1719C37.453 22.8587 37.5796 23.4522 37.8326 23.9522C38.0917 24.4523 38.4561 24.8378 38.9261 25.109C39.396 25.3801 39.9533 25.5156 40.5979 25.5156C41.0257 25.5156 41.4173 25.4554 41.7727 25.3349C42.1282 25.2144 42.4325 25.0336 42.6855 24.7927C43.1445 24.3555 43.6959 23.9355 44.3283 23.9773L44.6554 23.9989C45.8 24.0744 46.6308 25.1929 45.938 26.1073C45.8668 26.2014 45.7917 26.2934 45.7129 26.3832C45.1586 27.0158 44.4417 27.5098 43.5621 27.8653C42.6885 28.2147 41.6794 28.3894 40.5347 28.3894Z"]')
            .should('be.visible')
            .and('exist')           
    })

     it.only("explicit assertion", function(){
        
        
            cy.visit('https://systest-app.enum.africa/login')
            
            cy.get(data.email).should('exist').type('2b7fa5bb-51e5-4631-bfdd-975adf7cfb3d@mailslurp.com')
          
            cy.get(data.password).should('exist').type('@yYchukwu123')
          
            cy.get(data.loginButton).should('exist').click()

            let expName = "lota chukwu"

            cy.get('.name').then((name)=>{
             let actualName =  name.text()

             assert.equal(actualName, expName)
            //   expect(actualName).to.not.equal(expName)

            })
        
         
     })
})