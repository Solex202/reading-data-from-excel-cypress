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

    it('right click-- approach 2', ()=>{
        cy.visit('http://swisnl.github.io/jQuery-contextMenu/demo.html')
        cy.get('.context-menu-one').rightclick()

        cy.get('.context-menu-icon-copy').should('be.visible')
    })

    it('Double click', ()=>{

        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')

        cy.frameLoaded('#iframeResult')

        cy.iframe('#iframeResult').find("button[ondlclick='myFunction()']").trigger('dblclick')
        cy.iframe('#iframeResult').find('#field2').should('have.value', 'Hello World! ')


    })

    it('Drag and drop', ()=>{
        cy.visit('http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        cy.get('#box6').should('be.visible')
        cy.get('#box106').should('be.visible')

        cy.get('#box6').drag('#box106', {force:true})
    })

    it.only('Scroll page', ()=>{
        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')

        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').scrollIntoView({duration:4000})
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').should('be.visible')

        cy.get(':nth-child(1) > tbody > :nth-child(3) > :nth-child(1) > img').scrollIntoView({duration:4000})
        cy.get(':nth-child(1) > tbody > :nth-child(3) > :nth-child(1) > img').should('be.visible')

        cy.get('#footer').scrollIntoView({duration:4000})
    })
  })