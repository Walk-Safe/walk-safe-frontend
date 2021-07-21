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
      cy.visit('https://walk-safe-frontend.herokuapp.com/')
      cy.url().should('eq', 'https://walk-safe-frontend.herokuapp.com/')
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

  describe('Should be able to add a new contact', () => {

    it('Should submit a new contact', () => {
      cy.get('input[title="firstName"]').type('CY')
      .get('input[title="lastName"]').type('Test')
      .get('input[title="countryCode"]').type(1)
      .get('input[title="areaCode"]').type(720)
      .get('input[title="phoneNumber"]').type(1234567)
      .find('.add-contact-btn').click()
    });

    it('Shows the new contact when you visit the new trip form', () => {
      cy.get('#react-burger-menu-btn').click()
        .get('.menu-item').eq(0)
          .click()
        cy.visit('https://walk-safe-frontend.herokuapp.com/')
        .get('.select-contact').click()
          .contains('CY Test')
    });
  })
})
