describe('Handling tables', function (){
    beforeEach('Login', function (){

        cy.visit('https://demo.opencart.com/admin/index.php')
        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')
        cy.get(".btn").click()

        cy.get('.btn-close').click()
        cy.get('#menu-customer > .parent').click()
        cy.get('#collapse-5 > :nth-child(1) > a').click()

    })

    it.skip('Check Number Rows & Columns', function (){
        cy.get('.table>tbody>tr').should('have.length', '10')
        cy.get('.table>thead>tr>td').should('have.length', '7')
    })
    it.skip('Check cell data from specific row & column', function (){

        cy.get('tbody > :nth-child(2) > :nth-child(3)').contains('olaola@das.com ')
    })
    it.only('Read all the rows and columns data in the first page', function (){
        cy.get('.table>tbody>tr').each(($row, index, $rows)=>{
            cy.wrap($row).within(()=>{
                cy.get('td').each(($col, index, $cols)=>{
                    cy.log($col.text())
                })
            })
        })
    })
    it.only('Pagination', function(){
        let totalPages ;
            cy.get('.row > .text-end').then((e)=>{
            let textValue = e.text();
            totalPages = textValue.substring(textValue.indexOf("(")+1, textValue.indexOf("Pages")-1)
            cy.log("Total number of pages=====>"+ totalPages)
        })
    })

})