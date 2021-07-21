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
  })
})
