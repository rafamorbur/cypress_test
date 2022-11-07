export class LoginPage{

 fillUser(text) {
    cy.get('#username').type(text)

 }

 fillPass(text) {
    cy.get('#password').type(text)

 }

 clickButtonLogin() {
    cy.get('.fa').click()

 }

 borrarUser() {
    cy.get('#username').clear()
 }
 
 borrarPass(){
    cy.get('#password').clear () 
 }

 CheckMessageNotLogin(text) {
    cy.get('#flash').contains(text)
 
 }
}