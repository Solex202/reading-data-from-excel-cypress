describe('Mouse Operations', ()=>{
    it('MouseHover', ()=>{
        cy.visit("https://demo.opencart.com/")

        cy.get('.col-12 > a > .img-fluid').should('be.visible')
        cy.get('.col-12 > .img-fluid').should('be.visible')

        // cy.get('li:nth-of-type(1) > .dropdown-toggle.nav-link')
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(1) > .nav-link').should('be.visible')
    })

    it('right click-- approach 1', ()=>{
        cy.visit('http://swisnl.github.io/jQuery-contextMenu/demo.html')
        cy.get('.context-menu-one').trigger('contextmenu')

        cy.get('.context-menu-icon-copy').should('be.visible')
    })

    it.only('right click-- approach 2', ()=>{
        cy.visit('http://swisnl.github.io/jQuery-contextMenu/demo.html')
        cy.get('.context-menu-one').rightclick()

        cy.get('.context-menu-icon-copy').should('be.visible')
    })
  })