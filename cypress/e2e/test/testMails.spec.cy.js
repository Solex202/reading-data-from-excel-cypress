


let data
let inboxId
let emailAddress
let emailBody
let otpCode
let testdata

describe('conversion to json', ()=>{
  it('reading data from excel', ()=>{
    cy.parseXlsx('cypress/fixtures/testdata.xlsx').then((jsonData)=>{
      const rowLength = Cypress.$(jsonData[0].data).length
      for(let index = 0; index < rowLength; index++){
        var jsonData = jsonData[index].data
        console.log(jsonData[index].data)
        cy.writeFile("cypress/fixtures/testdata.json", {firstname:jsonData[0][0], lastname:jsonData[0][1], password:jsonData[0][2]})
      }
    })
  })
})

describe('testing talent registration and email token extraction', () => {

  before(()=>{
    cy.fixture('signup').then((sel)=>{
      data = sel;
    
    })
    cy.fixture('testdata').then((data)=>{
      testdata = data;
      cy.visit("/")
      cy.title().should('eq', 'Enum')
    })
  })
  
  it('should fill in first name', ()=>{
    cy.get(data.firstnameField).should('exist').type(testdata.firstname)
  })

  it('should fill in last name', ()=>{
    cy.get(data.lastnameField).should('exist').type(testdata.lastname)
  })

  // it('should fill in user email', ()=>{

    
  //   cy.createInbox().then((inbox)=>{
  //     inboxId = inbox.id
  //     emailAddress = inbox.emailAddress
  //     cy.get(data.email).should('exist').type(emailAddress)
  //   })
  // })

  it('should fill in password', ()=>{
    cy.get(data.password).should('exist').type(testdata.password)
  })

  it('click the sign up account button', ()=>{
    cy.get('.PrivateSwitchBase-input').check({force: true}).should('be.checked')
    cy.get(data.signupButton).should('exist').click()
  })

  it('insert the otp in the verification page', ()=>{
    cy.waitForLatestEmail(inboxId).then((email)=>{
      emailBody = email.body
      const parser = new DOMParser()
      const doc = parser.parseFromString(emailBody, 'text/html')
      var otp = doc.querySelector('.otp-input').textContent
      otpCode = otp.trim()
      cy.log(otpCode)
      cy.get(data.otpField).each((sel, index)=>{
        cy.wrap(sel).should('exist').type(otpCode[index])
      })

    })
  })

  it('verify that after otp is inserted successfully, next page is home page', ()=>{
    cy.url().should('eq', 'https://systest-app.enum.africa/home')
  })

})