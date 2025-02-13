/// <reference types="cypress" />

beforeEach(() => {
  Cypress.env('visitedUrls', [])
  Cypress.on('url:changed', (url) => {
    // remove the base url
    url = url.replace(Cypress.config('baseUrl'), '/')
    Cypress.env('visitedUrls').push(url)
  })
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
