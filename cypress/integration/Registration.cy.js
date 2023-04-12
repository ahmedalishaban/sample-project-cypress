/// <reference types="cypress"/>
import { registration } from "./pages/registration_page"

const registrationPage = new registration()

beforeEach(() => {
    cy.visit("https://demo.nopcommerce.com/register")
})

describe("Registration Scenarios", () => {

    it("Valid Registration Script for e-commerce website", () => {
        // Choose MALE as the gender
        cy.get('#gender-male').click()
        // Enter FIRST NAME
        registrationPage.enterFisrtName("Ahmed")
        // Enter LAST NAME
        registrationPage.enterLastName("Ali")
        // Select BirthDay
        cy.get('[name="DateOfBirthDay"]').select("3")
        // Select BirthMonth
        cy.get('[name="DateOfBirthMonth"]').select("5")
        // Select BirthYear
        cy.get('[name="DateOfBirthYear"]').select("2000")
        // Enter email
        registrationPage.enterEmail("ahmedal@gmail.com")
        // Enter Company Name
        cy.get('#Company').type("Professional Tester")
        // Enter Password
        cy.get('#Password').type("AHMEDali123")
        // Confirm Password
        cy.get('#ConfirmPassword').type("AHMEDali123")
        // Click on Register Button 
        registrationPage.registrationBtn()

        // Assert that the successful message appears with the expected color
        cy.get('.result').should('be.visible')
            .and('have.css', 'color', 'rgb(76, 177, 124)'); // Green color in RGB format
    })

    it("Invalid Registration Script for e-commerce website", () => {
        // Choose MALE as the gender
        cy.get('#gender-male').click()
        // Enter FIRST NAME
        registrationPage.enterFisrtName("Ahmed")
        // Enter LAST NAME
        registrationPage.enterLastName("Ali")
        // Select BirthDay
        cy.get('[name="DateOfBirthDay"]').select("3")
        // Select BirthMonth
        cy.get('[name="DateOfBirthMonth"]').select("5")
        // Select BirthYear
        cy.get('[name="DateOfBirthYear"]').select("2000")
        // Enter email
        registrationPage.enterEmail("ahmedal@gmail.com")
        // Enter Company Name
        cy.get('#Company').type("Professional Tester")
        // Enter Password
        cy.get('#Password').type("AHMEDali123")
        // Confirm Password
        cy.get('#ConfirmPassword').type("AHMEDali123")
        // Click on Register Button 
        registrationPage.registrationBtn()

        // Assert that the error message appears with the expected color
        cy.get('.message-error > ul > li').should('be.visible')
            .and('have.css', 'color', 'rgb(228, 67, 75)'); // Red color in RGB format
    })
})
