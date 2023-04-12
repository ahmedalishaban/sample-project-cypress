export class registration {


    enterFisrtName(firstname){
        cy.get('#FirstName').type(firstname)
    }

    enterLastName(lastname){
        cy.get('#LastName').type(lastname)
    }

    enterEmail(email){
        cy.get('#Email').type(email)
    }


    registrationBtn(){
        cy.get('#register-button').click()
    }
    

}