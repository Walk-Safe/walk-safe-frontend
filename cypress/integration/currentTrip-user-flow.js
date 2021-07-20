import { aliasQuery, aliasMutation } from '../utils/graphql-test-utils';


describe('Main View', () => {

beforeEach(() => {
    cy.intercept('POST', 'https://walk-safe-backend.herokuapp.com/', (req) => {

      aliasQuery(req, 'GetUser')

      aliasMutation(req, 'CreateTrip')
    })
  })

  describe('Should show main view of walk-safe App', () => {

    it('Should be able to type into the search input and see that value in the start point input', () => {
      cy.visit('http://localhost:3000/')
      cy.get('.start-point').type('6245 Garrison')
          .wait(200)
          .type('{downarrow}')
          .type("{enter}")
          .wait(200)
        .get('.end-point').type('1602 South Garfield')
          .wait(200)
          .type('{downarrow}')
          .type("{enter}")
          .wait(200)
        .get('.select-transport')
          .type('{downarrow}')
          .type('{downarrow}')
          .wait(200)
          .type("{enter}")
          .type("{enter}")
        .get('.select-contact')
          .type('{downarrow}')
          .type('{downarrow}')
          .wait(200)
          .type("{enter}")
          .type("{enter}")
        .get('.submit-trip-btn')
          .click()
        .get('.eta-modal')
        .get('.begin-trip-btn')
          .click()
    })
  })
})
