/// <reference types="cypress" />

it('click shifting opc ', () =>{ 
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(39) > a').click ()
    cy.get('[href="/shifting_content/menu"]').click ()
    cy.get("li").should('have.length', 5)
   })
