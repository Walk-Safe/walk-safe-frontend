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
          // .get(`.select-contact`).first().type('bryan hohn')
          // .contains('bryan hohn')
          // .click({force: true});
          .get('.css-g1d714-ValueContainer').last().click()
          .click()
          .type("{enter}")
          // .find('div').contains('Bryan Hohn')
          // .click({force: true})
          .wait(200)
        // .get('[class*="select-transport"]').click({force: true})
        //   .type('w')
        //   .type("{enter}")
          // .get('.select-contact').click()
          // .wait(200)
          // .type('{downarrow}')
          // .type('{downarrow}')
          // .type("{enter}")
          // .type("{enter}")
    //     .get('.submit-trip-btn')
    //       .click()
    //     .get('.eta-modal')
    //     .get('.begin-trip-btn')
    //       .click()
    })
  })
})
