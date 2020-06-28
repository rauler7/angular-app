describe('Localhost page loading', () => {
  it('Visits the localhost to test the Angular App we just deployed', () => {
    cy.visit('http://localhost/')
  })
})

describe('Click a link', () => {
  it('clicks the link "learn-angular"', () => {
    cy.visit('localhost')

    cy.get('a[id="learn-angular"]').click()
  })
})
