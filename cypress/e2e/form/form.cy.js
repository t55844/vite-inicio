///<reference types="cypress" />

const formUrl = 'http://localhost:3000/'

describe('Test form submission', () => {
    it('submits the form', () => {
        cy.visit(formUrl); // Navigate to the page with the form

        cy.get('button[type="submit"]').click();
        // Find all input elements with type="text"
        cy.get('input[type="text"]').each(($input) => {
            // Type something into each text input
            cy.wrap($input).type('example text');
        });

        // Find the input element with type="date"
        cy.get('input[type="date"]').then(($input) => {
            // Set the date to "2023-03-18"
            cy.wrap($input).type('2023-03-18');
        });

        // Find the submit button and click it
        cy.get('button[type="submit"]').click();

        // Assert that the form was successfully submitted
    });
});
