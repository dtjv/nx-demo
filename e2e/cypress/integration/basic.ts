/// <reference path="../support/index.d.ts" />

describe('About', () => {
  beforeEach(() => {
    cy.visit('/about')
  })

  it('should display a heading', () => {
    cy.getBySel('about-title').contains('About')
  })

  it('should show correct count on increment', () => {
    cy.getBySel('increment').click()
    cy.getBySel('count').should('contain', 'Count is: 1')
  })
})
