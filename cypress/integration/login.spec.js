/// <reference types="cypress" />

it('A valid user can login', () =>{ 
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click ()
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').contains("You logged into a secure area!")


 
   })


it('a not valid password try login', () =>{ 
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click ()
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("123")
    cy.get('.fa').click()
    cy.get('#flash').contains("Your password is invalid!")
     
   })

   it('a not valid user try login', () =>{ 
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click ()
    cy.get('#username').type("ramon")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').contains(" Your username is invalid!")
     
   })

   it('login campos vacios', () =>{ 
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click ()
    cy.get('#username').type(" ")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').contains(" Your username is invalid!")
     
   })
   it('click shifting opc ', () =>{ 
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(39) > a').click ()
    cy.get('[href="/shifting_content/menu"]').click ()
    cy.get(':nth-child(1) > a').contains("Home")
    cy.get(':nth-child(7) > :nth-child(2) > a').contains("About")
    cy.get(':nth-child(7) > :nth-child(3) > a').contains("Contact Us")
    cy.get(':nth-child(7) > :nth-child(4) > a').contains("Portfolio")
    cy.get('.shift').contains("Gallery")
   


   
     
   })