beforeEach(()=>{
    cy.visit('/loginPage');
  
  })
  
  describe(' All Login Test', () => {
      it('Successful login with valid credentials', () => {
        cy.get('#username').type('validUsername')
        cy.get('#password').type('validPassword')
        cy.get('#loginButton').click()
        cy.url().should('include', '/dashboard');  // Assuming a redirect to /dashboard
      })
  
      it('Failed login with invalid credentials', () => {
        cy.get('#username').type('invalidUsername')
        cy.get('#password').type('invalidPassword')
        cy.get('#loginButton').click();
        cy.get('#errorMessage').should('be.visible')
      })
  
      it('Displays error message on failed login', () => {
        cy.get('#username').type('invalidUsername')
        cy.get('#password').type('invalidPassword')
        cy.get('#loginButton').click();
        cy.get('#errorMessage').should('contain', 'Invalid credentials')
      })
  
    })
    