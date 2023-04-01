describe('Test suite for seePlant page', () => {
    it('Should type "s" in the input and check for images and words', () => {
        cy.visit('http://localhost:3000/seePlant');
        cy.get('input').type('s');
        cy.get('.test-card').each(($card) => {
            cy.wrap($card).should('have.css', 'width', '384px');
        });
        cy.wait(45000); // Set a pause of 45 seconds (in milliseconds)
        cy.get('input').clear()
        cy.get('.test-card').should('not.exist');
        cy.wait(20000); // Set a pause of 20 seconds (in milliseconds)
    });
});
