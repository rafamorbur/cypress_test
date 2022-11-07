export class ShiftingPage{

    clickShiftingButton() {
        cy.get(':nth-child(39) > a').click ()

    }

    clickButtonExample01() {
        cy.get('[href="/shifting_content/menu"]').click ()
    }

    CheckMenuElement(value) {
        cy.get("li").should('have.length', value)
    }



}