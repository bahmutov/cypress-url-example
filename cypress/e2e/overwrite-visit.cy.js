/// <reference types="cypress" />

Cypress.Commands.overwrite(
  'visit',
  (originalFn, url, options = {}) => {
    Cypress.env('visitedUrls').push(url)
    return originalFn(url, options)
  },
)

beforeEach(() => {
  Cypress.env('visitedUrls', [])
})

afterEach(() => {
  console.log(Cypress.env('visitedUrls'))
})

it('visits multiple urls', () => {
  cy.visit('/')
  cy.contains('a', 'videos').click()
  cy.location('pathname').should('eq', '/videos.html')
  cy.go('back')
  cy.location('pathname').should('eq', '/')
})
