import { loginSelectors } from "./selectors";

Cypress.Commands.add("login", (username, password) => {
  cy.get(loginSelectors.usernameField).type(username);
  cy.get(loginSelectors.passwordField).type(password);
  cy.get(loginSelectors.loginBtn).click();
});
