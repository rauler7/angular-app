describe('Localhost page loading', () => {
  it('Visits the localhost to test the Angular App we just deployed', () => {
    cy.visit('http://localhost/')
  })
})
