/// <reference types="cypress"/>
import { registration } from "./pages/registration_page"

const registrationPage = new registration()

beforeEach("Navigate to e-commerce website", function() {
        // Navigation to the website
        cy.visit("https://demo.nopcommerce.com/register")
})
describe("Registration Scenarios", function(){

    it("Valid Registeration Script to e-commerce website", function(){

        // choosing MALE as A Gender 
        cy.get('#gender-male').click()
        // Put his FIRST NAME
        registrationPage.enterFisrtName("Ahmed")
        // Put his LAST NAME
        registrationPage.enterLastName("Ali")
        // Put his BirthDay
        cy.get('[name="DateOfBirthDay"]').select("3")
        // Put his BirthMonth
        cy.get('[name="DateOfBirthMonth"]').select("5")
        // Put his BirthYear
        cy.get('[name="DateOfBirthYear"]').select("2000")
        // Enter his email
        registrationPage.enterEmail("ahmedal@gmail.com")
        // Enter his Company Name
        cy.get('#Company').type("Th3bestfuture")
        // Enter his Password
        cy.get('#Password').type("AHMEDali123")
        // Confirm his Password
        cy.get('#ConfirmPassword').type("AHMEDali123")
        // Click on Register Button 
        registrationPage.registrationBtn()
    
          // Assert that the successful message appears with the expected color
            cy.get('.result').should('be.visible')
            .and('have.css', 'color', 'rgb(76, 177, 124)'); // Green color in RGB format

        
    })
    
    
    it("InValid Registeration Script to e-commerce website", function(){
    
        // Navigation to the website
        cy.visit("https://demo.nopcommerce.com/register")
        // choosing MALE as A Gender 
        cy.get('#gender-male').click()
        // Put his FIRST NAME
        registrationPage.enterFisrtName("Ahmed")
        // Put his LAST NAME
        registrationPage.enterLastName("Ali")
        // Put his BirthDay
        cy.get('[name="DateOfBirthDay"]').select("3")
        // Put his BirthMonth
        cy.get('[name="DateOfBirthMonth"]').select("5")
        // Put his BirthYear
        cy.get('[name="DateOfBirthYear"]').select("2000")
        // Enter his email
        registrationPage.enterEmail("ahmedal@gmail.com")
        // Enter his Company Name
        cy.get('#Company').type("Th3bestfuture")
        // Enter his Password
        cy.get('#Password').type("AHMEDali123")
        // Confirm his Password
        cy.get('#ConfirmPassword').type("AHMEDali123")
        // Click on Register Button 
        registrationPage.registrationBtn()
    
         // Assert that the error message appears with the expected color
         cy.get('.message-error > ul > li').should('be.visible')
            .and('have.css', 'color', 'rgb(228, 67, 75)'); // Red color in RGB format
        
    })

})
 