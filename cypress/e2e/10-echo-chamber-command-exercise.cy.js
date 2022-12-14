/* eslint-disable no-undef */
/// <reference types="cypress" />

import '../../support/commands-complete';

const user = {
  email: 'first@example.com',
  password: 'password123',
};

describe('Sign Up', () => {
  beforeEach(() => {
    cy.task('reset');
  });

  it('should successfully create a user when entering an email and a password', () => {
    cy.signUp(user);
    cy.login(user);
    cy.visit('/echo-chamber/posts');
    cy.location('pathname').should('contain', '/echo-chamber/posts');
    cy.contains('Signed in as ' + user.email);
  });
});

describe('Sign In', () => {
  beforeEach(() => {
    cy.visit('/echo-chamber/sign-in');
    cy.task('seed');
  });

  it('should sign in with an existing user', () => {
    cy.signUp(user);
    cy.login(user);
    cy.visit('/echo-chamber/posts');
    cy.location('pathname').should('contain', '/echo-chamber/posts');
    cy.contains('Signed in as ' + user.email);
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-test="post-preview-53-content"]').click();
    cy.get('[data-test="post-detail-controls-delete-button"] > .small').click();
    /* ==== End Cypress Studio ==== */
  });
});
