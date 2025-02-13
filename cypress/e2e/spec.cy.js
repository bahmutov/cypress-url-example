/// <reference types="cypress" />

// https://github.com/bahmutov/cypress-log-to-term
import 'cypress-log-to-term/commands'

beforeEach(() => {
  Cypress.env('visitedUrls', new Set())
  Cypress.on('url:changed', (url) => {
    // remove the base url
    url = url.replace(Cypress.config('baseUrl'), '/')
    Cypress.env('visitedUrls').add(url)
  })
})

afterEach(() => {
  cy.wrap(Cypress.env('visitedUrls').values().toArray(), {
    log: false,
  }).log()
})

it('visits multiple urls', () => {
  cy.visit('/')
  cy.contains('a', 'videos').click()
  cy.location('pathname').should('eq', '/videos.html')
  cy.go('back')
  cy.location('pathname').should('eq', '/')
})
