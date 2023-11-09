/// <reference types="Cypress"/>

require('cypress-iframe');
require('@4tw/cypress-drag-drop')
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

Cypress.Commands.add('clickLink', (label)=>{
    cy.get('a').contains(label).click()
})

// Cypress.Commands.overwriteQuery('contains', (originalFn.bind(this), subject, filter, text, options = {})=>{
//     if (typeof text == 'object'){
//         options = text
//         text = filter
//         filter = undefined
//     }
//
//     options.matchCase = false
//
//     return originalFn(subject, filter, text, options)
// })

Cypress.Commands.overwriteQuery(
    "contains",
    function (contains, filter, text, userOptions = {}) {

        // This is parameter resolution from Cypress v12.7.0 source
        if (Cypress._.isRegExp(text)) {
            // .contains(filter, text)
            // Do nothing
        } else if (Cypress._.isObject(text)) {
            // .contains(text, userOptions)
            userOptions = text
            text = filter
            filter = ''
        } else if (Cypress._.isUndefined(text)) {
            // .contains(text)
            text = filter
            filter = ''
        }

        userOptions.matchCase = false;

        let contains0 = contains.bind(this)    // this line fixes the error

        return contains0(filter, text, userOptions)
    }
)