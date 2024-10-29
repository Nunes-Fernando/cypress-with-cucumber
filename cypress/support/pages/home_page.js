<reference types='cypress' />

export default {
    acessLogin(){
        cy.visit('/')
            .get('#top_header');
        
        cy.get('.fa fa-user')
            .click();
    },

    clickButton(){
        cy.get('#btnLogin')
            .click();
    },

    seeMessage(){
        cy.get('.invalid_input')
            .should('be.visible');
    }

}