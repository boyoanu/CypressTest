export const loginSelectors = {
  usernameField: '[data-test="username"]',
  passwordField: '[data-test="password"]',
  loginBtn: '[data-test="login-button"]',
  errorMessage: '[data-test="error"]',
  lastNameError: '[data-test="error]',
};

export const cartSelectors = {
  inventoryItem: '[data-test="add-to-cart-sauce-labs-backpack"]',
  shoppingCartLink: '[data-test="shopping-cart-link"]',
  cartBadge: '[data-test="shopping-cart-badge"]',
  removeItem: '[data-test="remove-sauce-labs-backpack"]',
};

export const checkoutSelectors = {
  firstName: '[data-test="firstName"]',
  lastName: '[data-test="lastName"]',
  postalCode: '[data-test="postalCode"]',
  continueBtn: '[data-test="continue"]',
  finishBtn: '[data-test="finish"]',
  checkoutBtn: '[data-test="checkout"]', // This element locator is not working
  completeHeader: '[data-test="title"]',
};
