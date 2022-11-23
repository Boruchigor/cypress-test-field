describe('Secret Menu with Cypress Studio', () => {
  beforeEach(() => {
    cy.visit('/secret-menu');
  });

  it('does stuff generated by Cypress Studio', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#minimum-rating-visibility').click();
    cy.get(':nth-child(1) > .whereToOrder > .cell').should('have.text', 'Chick-fil-A');
    /* ==== End Cypress Studio ==== */
  });
});
