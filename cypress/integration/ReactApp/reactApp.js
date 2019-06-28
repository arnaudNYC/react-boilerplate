import { Given } from 'cypress-cucumber-preprocessor/steps';

const url = 'http://localhost:3000';

Given('I open the home page', () => {
  cy.visit(url);
});
