/// <reference types="cypress" />

    describe('Make a search', () => {
      it('.should() - find searchable info', () => {
        cy.visit('https://www.google.com/')
        cy.get('input.gLFyf.gsfi')
      .type('fake@email.com').should('have.value', 'fake@email.com')
    }) 
  })