import { aliasQuery, aliasMutation } from '../utils/graphql-test-utils';
// import userData from "../fixtures/user-data.json";

describe ('Add Contacts Page View', () => {

  beforeEach(() => {
    cy.intercept('POST', 'https://walk-safe-backend.herokuapp.com/graphql', { fixture:'user-data.json'}).as('getUser')
  })

  it('should display Header when you visit the add contact page', () => {
    // cy.intercept('POST', 'http://localhost:3000/graphql', (req) => {
    //   const { body } = req
    //   if (hasOperationName(req, 'GetUser')) {
    //     // Declare the alias from the initial intercept in the beforeEach
    //     req.alias = 'gqlGetUserQuery'
    //
    //     // Set req.fixture or use req.reply to modify portions of the response
    //     req.reply((res) => {
    //       // Modify the response body directly
    //         res.body.data = {
    //               userData
    //         }
    //     })
    //   }
    // })

    // Must visit after cy.intercept
    cy.visit('http://localhost:3000/')
    cy.wait('@getUser')
      .get('.loading').should('exist')
  })
})
