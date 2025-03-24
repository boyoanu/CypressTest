import { checkoutSelectors } from "../support/selectors";
import loginData from "../fixtures/loginData.json";

describe("Checkout Tests", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login(loginData.validUser.username, loginData.validUser.password);
  });

  it("should complete checkout successfully", () => {
    cy.get(checkoutSelectors.checkoutBtn).click();
    cy.get(checkoutSelectors.firstName).type(loginData.checkoutInfo.firstName);
    cy.get(checkoutSelectors.lastName).type(loginData.checkoutInfo.lastName);
    cy.get(checkoutSelectors.postalCode).type(loginData.checkoutInfo.postalCode);
    cy.get(checkoutSelectors.continueBtn).click();
    cy.get(checkoutSelectors.finishBtn).click();
    cy.get(checkoutSelectors.completeHeader).should("contain", "THANK YOU");
  });
  });

  it("Checkout - should display an error for incomplete shipping information during checkout", () => {
      cy.get(checkoutSelectors.checkoutBtn).click();
      cy.get(checkoutSelectors.firstName).type(loginData.checkoutInfo.firstName);
      cy.get(checkoutSelectors.lastName).type(loginData.checkoutInfo.lastName);
      cy.get(checkoutSelectors.postalCode).type(loginData.checkoutInfo.postalCodeError);
      cy.get(checkoutSelectors.continueBtn).click();
      cy.get(checkoutSelectors.completeHeader).should("contain", " Error: Postal Code is required");
      
    });


