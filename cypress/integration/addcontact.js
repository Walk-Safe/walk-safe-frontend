import { aliasQuery, aliasMutation } from '../utils/graphql-test-utils';

describe('Add Contact Page', () => {

beforeEach(() => {

    cy.intercept('POST', 'https://walk-safe-backend.herokuapp.com/', (req) => {
      aliasQuery(req, 'GetUser')
      aliasMutation(req, 'CreateTrip')
    })
  })

  describe('Should navigate to a AddContact view via hamburger navigation', () => {

    it('Should be able to visit the main page', () => {
      cy.visit('http://localhost:3000/')
      cy.url().should('eq', 'http://localhost:3000/')
    });

    it('Should open AddContact page through the navigation menu', () => {
      cy.get('#react-burger-menu-btn')
        .click()
        .get('.menu-item').eq(1)
          .click()
    });

    it('Should display an add contact form', () => {
      cy.get('.add-contact').should('be.visible')
        .get('h2').contains('Add Contact')
        .get('h3').contains('Phone Number')
        .get('input[title="firstName"]').should('be.visible')
        .get('input[title="lastName"]').should('be.visible')
        .get('input[title="countryCode"]').should('be.visible')
        .get('input[title="areaCode"]').should('be.visible')
        .get('input[title="phoneNumber"]').should('be.visible')
        .get('.add-contact-btn').should('be.visible')
    });

    it('Should display header, title and nav items', () => {
      cy.get('.app-header').should('contain', 'WALK SAFE')
      cy.get('.welcome-msg').should('contain', 'Welcome')
      cy.get('#react-burger-menu-btn').should('be.visible')
    });
  })
})
