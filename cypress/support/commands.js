/// <reference types="Cypress"/>

const{MailSlurp} = require('mailslurp-client')

const mailslurp = new MailSlurp({ apiKey: Cypress.env('EMAIL_API_KEY')});


Cypress.Commands.add('createInbox', ()=>{
    return mailslurp.createInbox();
}) 

Cypress.Commands.add('waitForLatestEmail', (inboxId)=>{
    const timeoutMillis = 30000
    return mailslurp.waitForLatestEmail(inboxId, timeoutMillis);
})

Cypress.Commands.add('parseXlsx', (inputFile)=>
     cy.task('parseXlsx', {filepath: inputFile})
);