import 'cypress-file-upload'
describe('File upload', ()=>{

    it('Upload single file', function (){
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('testdata.xlsx')


        cy.get('#file-submit').click()

        // cy.get('.large-4 > div').should("include", 'Powered')
    })

    it('Upload file - Rename', function (){
        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get('#file-upload').attachFile({filePath:'testdata.xlsx', fileName:'exceldata.xlsx'})
        cy.get('#file-submit').click()

        cy.wait(3000)

        cy.get('h3').should('have.text', 'File Uploaded!')
    })

    it('Upload file - Drag and drop', function (){
        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#drag-drop-upload').attachFile("testdata.xlsx",{subjectType:'drag-n-drop'})

        cy.wait(3000)
        cy.get('#drag-drop-upload').contains('testdata.xlsx')

    })

    it.only('Upload multiple files', function (){
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

        cy.get('#filesToUpload').attachFile(['testdata.xlsx','java.jpg','Screenshot 2023-10-31 155823.png'])
    })

})