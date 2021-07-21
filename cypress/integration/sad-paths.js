import { aliasQuery, aliasMutation } from '../utils/graphql-test-utils';

describe('Sad Paths', () => {

beforeEach(() => {

    cy.intercept('POST', 'https://walk-safe-backend.herokuapp.com/', (req) => {

      aliasQuery(req, 'GetUser')

      aliasMutation(req, 'CreateTrip')
    })
  })

  describe('Should alert the users contact if their trip time expires', () => {

  it('Should display an option to add more time to current ETA once that expires', () => {
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
        .get('.trip-container').should('be.visible')
        .get('.mm-popup__box')
        .get('.mm-popup__btn--ok').click()
        .wait(58000)
        .get('.add-time-modal').should('be.visible')
        .wait(30000)
        .get('.mm-popup__box')
        .get('.mm-popup__btn--ok').click()
        .get('.alert-modal').should('be.visible')
    })
  })
})
