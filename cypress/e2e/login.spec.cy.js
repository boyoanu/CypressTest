import { loginSelectors } from "../support/selectors.js";
import loginData from "../fixtures/loginData.json";


describe("Login Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should log in successfully with valid credentials", () => {
    cy.login("standard_user", "secret_sauce");
    cy.url().should("include", "/inventory.html");
  });

  it("should show an error for invalid username", () => {
    cy.login("invalid_user", "secret_sauce");
    cy.get(loginSelectors.errorMessage).should("be.visible");
  });

  it("should show an error for invalid password", () => {
    cy.login("invalid_user", "wrong_password");
    cy.get(loginSelectors.errorMessage).should("be.visible");
  });

  it("should show an error for invalid credential ", () => {
    cy.login("Invalid_user", "wrong_password");
    cy.get(loginSelectors.errorMessage).should("be.visible");
  });

  it("should show an error for blank credential ", () => {
    cy.login(" ", " ");
    cy.get(loginSelectors.errorMessage).should("be.visible");
  });

  it("should show an error for locked user", () => {
    cy.login("locked_out_user", "secret_sauce");
    cy.get(loginSelectors.errorMessage).should("be.visible");
  });
});
