/// <reference types="cypress" />

describe ("TETS DE LOGIN", () =>{ 
 beforeEach(() =>{
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click ()
})

 it('A valid user can login', () =>{ 
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').contains("You logged into a secure area!")

   })


 it('a not valid password try login', () =>{ 
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("123")
    cy.get('.fa').click()
    cy.get('#flash').contains("Your password is invalid!")
     
   })

 it('login campos vacios', () =>{ 
    cy.get('#username').type("123 ")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').contains(" Your username is invalid!")
    
   })

 it('a not valid user try login', () =>{ 
    cy.get('#username').clear()
    cy.get('#password').clear ()
    cy.get('.fa').click()
    cy.get('#flash').contains(" Your username is invalid!")
     
   })


})  

 


 