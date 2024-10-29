import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page"

Given('I am login screen', () => {
    cy.log('Navegando para a tela de login');
    return home_page.acessLogin();
})


When('I click on login', () => {
    home_page.clickButton();
})

Then('I see error message', () => {
    home_page.seeMessage();
})