import { cartSelectors } from "../support/selectors";

describe("Cart Tests", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login("standard_user", "secret_sauce");
  });

  it("should add an item to the cart", () => {
    cy.get(cartSelectors.inventoryItem).click();
    cy.get(cartSelectors.shoppingCartLink).click();
    cy.get(cartSelectors.cartBadge).should("contain", "1");
  });

  it("should remove an item from the cart", () => {
    cy.get(cartSelectors.inventoryItem).click();
    cy.get(cartSelectors.shoppingCartLink).click();
    cy.get(cartSelectors.removeItem).click();
    cy.get(cartSelectors.cartBadge).should("not.exist");
  });
});
