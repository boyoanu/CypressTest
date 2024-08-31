beforeEach(()=>{
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

})

describe(' All Login Test', () => {
    it('Successful login with valid ', () => {
      cy.get('input[name="username"]').type('Admin')
      cy.get('input[name="password"]').type('admin123')
      cy.get('.oxd-button').click()
    })

    it('Failed login with invalid credentials', () => {
      cy.get('input[name="username"]').type('Admin')
      cy.get('input[name="password"]').type('admin1234')
      cy.get('.oxd-button').click()
      cy.get('.oxd-alert-content > .oxd-text').should('be.visible')
    })

    it('Displays error message on failed login', () => {
      cy.get('input[name="username"]').type('Adminn')
      cy.get('input[name="password"]').type('admin1234')
      cy.get('.oxd-button').click()
      cy.get('.oxd-alert-content > .oxd-text').should('contain', 'Invalid credentials')
    })

  })
  