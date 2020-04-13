/// <reference types="cypress" />

    describe('Make a search', () => {
      it('.should() - find searchable info', () => {
        cy.visit('https://www.google.com/')
        cy.get('input[type = "text"]')
        .type('Мир дикого запада').should('have.value', 'Мир дикого запада')
        .type('{enter}')
        cy.get('a[href*=wiki]')
    }) 
  })