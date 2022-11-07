
/// <reference types="cypress" />
import {MainPage} from "../page-objects/main"
import {ShiftingPage} from "../page-objects/shifting"

describe ("TETS SHIFTING CONTENT", () =>{ 
const shiftingPage = new ShiftingPage()
const mainPage = new MainPage()

 beforeEach(() =>{
    mainPage.navigate()
      
})

it('click shifting opc ', () =>{ 
    shiftingPage.clickShiftingButton()
    shiftingPage.clickButtonExample01()
    shiftingPage.CheckMenuElement(5)
      })

})  