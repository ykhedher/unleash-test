describe('Search Street app', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:5000') // change URL to match your dev URL
  })
  beforeEach(() => {
    cy.visit('http://localhost:5000')
  })
  it('finds the content "type"', () => {
    cy.contains('Enter Street Name')
  })
  it('Gets result', () => {
    cy.get('.container__input')
      .type('Oslo')
      .should('have.value', 'Oslo')
    cy.get('.list-container')
    .contains('Oslo')
  })
  it('Gets no result', () => {
    cy.get('.container__input')
      .type('Oslooooooo')
      .should('have.value', 'Oslooooooo')
    cy.get('h1').should('have.text', "Oops!! There's no street called 'Oslooooooo'");
  })
})
