/// <reference types="cypress" />
import {MainPage} from "../page-objects/main"
import {LoginPage} from "../page-objects/login"
import {WelcomePage} from "../page-objects/welcome"

describe ("TETS DE LOGIN", () =>{ 
const loginPage = new LoginPage()
const mainPage = new MainPage()
const welcomePage = new WelcomePage()

 beforeEach(() =>{
   mainPage.navigate()
   mainPage.clickLoginOption()
  
    
})

 it('A valid user can login', () =>{ 
    loginPage.fillUser("tomsmith")
    loginPage.fillPass("SuperSecretPassword!")
    loginPage.clickButtonLogin()
    welcomePage.checkMessage("You logged into a secure area!")

   })


 it('a not valid password try login', () =>{ 
   loginPage.fillUser("tomsmith")
   loginPage.fillPass("123!")
   loginPage.clickButtonLogin()
   loginPage.CheckMessageNotLogin ("Your password is invalid!")
     
   })

 it('a not valid user try login', () =>{ 
   loginPage.fillUser("123")
   loginPage.fillPass("SuperSecretPassword!")
   loginPage.clickButtonLogin()
   loginPage.CheckMessageNotLogin ("Your username is invalid!")


   })

 it('login campos vacios', () =>{ 
    loginPage.borrarUser
    loginPage.borrarPass
    loginPage.clickButtonLogin()
    cy.get('#flash').contains(" Your username is invalid!")
     
   })


})  

 


 