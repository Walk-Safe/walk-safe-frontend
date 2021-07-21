import { aliasQuery, aliasMutation } from '../utils/graphql-test-utils';


describe('Current Trip User Story', () => {

beforeEach(() => {
    cy.intercept('POST', 'https://walk-safe-backend.herokuapp.com/', (req) => {

      aliasQuery(req, 'GetUser')

      aliasMutation(req, 'CreateTrip')
    })
  })

  describe('Should be able to start a new trip', () => {

    it('Should be able to complete form and start a new trip', () => {
      cy.visit('http://localhost:3000/')
      cy.get('.start-point').type('2343 Quitman St Denver')
          .wait(200)
          .type('{downarrow}')
          .type("{enter}")
          .wait(200)
        .get('.end-point').type('2511 Quitman St Denver')
          .wait(200)
          .type('{downarrow}')
          .type("{enter}")
          .wait(200)
          .get('.select-transport').click()
            .click()
            .type("{enter}")
          .get('.select-contact').click()
            .click()
            .type("{enter}")
            .wait(200)
          .get('.submit-trip-btn')
            .click()
          .get('.begin-trip-btn')
            .click()
    })

    it('Should be able to see a countdown timer once the trip has started', () => {
      cy.get('.timer-wrapper').eq(0)
        .contains('hours')
        .get('.timer-wrapper').eq(1)
          .contains('minutes')
        .get('.timer-wrapper').eq(2)
          .contains('seconds')
        .get('.end-walk-btn')
          .contains('END TRIP')
    })

    it('Can end the trip when the End Trip button is selected', () => {
        cy.get('.end-walk-btn')
          .click()
          .get('.trip-form').should('be.visible')
    })
  })
})
