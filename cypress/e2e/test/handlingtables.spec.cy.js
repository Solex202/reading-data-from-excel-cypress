describe('Handling tables', function (){
    beforeEach('Login', function (){

    })

    it('Check Number Rows & Columns', function (){

    })
    it('Check cell data from specific row & column', function (){


    })
    it('Read all the rows and columns data in the first page', function (){
        cy.get('').each(($row, index, $rows)=>{
            cy.wrap($row).within(()=>{
                cy.get('td' ).each(($col, index, $cols)=>{
                    cy.log($col.text())
                })
            })
        })
    })
    it('Pagination', function (){

    })
    it('Check Number Rows & Columns', function (){

    })
})