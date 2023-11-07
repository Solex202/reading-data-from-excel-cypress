import 'cypress-file-upload'
describe('File upload', ()=>{

    it('Upload single file', function (){
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('testdata.xlsx')

        cy.get('#file-submit').click()

        // cy.get('.large-4 > div').should("include", 'Powered')
    })

    it.only('Upload file - Rename', function (){
        cy.visit('https://the-internet.herokuapp.com/upload')
    })
})