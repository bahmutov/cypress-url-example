/// <reference types="cypress" />

beforeEach(() => {
  Cypress.env('visitedUrls', new Set())
  Cypress.on('url:changed', (url) => {
    // remove the base url
    url = url.replace(Cypress.config('baseUrl'), '/')
    Cypress.env('visitedUrls').add(url)
  })
})

afterEach(() => {
  const set = Cypress.env('visitedUrls')
  console.log(set.values().toArray())
})

it('visits multiple urls', () => {
  cy.visit('/')
  cy.contains('a', 'videos').click()
  cy.location('pathname').should('eq', '/videos.html')
  cy.go('back')
  cy.location('pathname').should('eq', '/')
})
