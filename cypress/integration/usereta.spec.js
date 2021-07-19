// import { aliasQuery, aliasMutation } from '../utils/graphql-test-utils';

// describe('Show main view of walk-safe App', () => {

//   beforeEach(() => {
//     cy.intercept('POST', 'http://localhost:3000/graphql', (req) => {
//       // Queries
//       aliasQuery(req, 'GetUser')

//       // Mutations
//       aliasMutation(req, 'CreateTrip')
//     })
//   })

//   it('Should be able to visit the main page', () => {
//     cy.visit('http://localhost:3000')
//     cy.url().should('eq', 'http://localhost:3000/')
//   })

//   it('Should be able to type into the search input and see that value in the start point input', () => {
//     cy.get('.start-point').type('6245 Garrison St, Arvada, CO 80004')
//         .should('have.value', '6245 Garrison St, Arvada, CO 80004')
//         .wait(2000)
//         .type("{enter}")

//   })

//   it('Should be able to type into the search input and see that value in the end point input', () => {
//     cy.get('.end-point').type('1602 South Garfield St, Denver, CO 80206')
//         .should('have.value', '1602 South Garfield St, Denver, CO 80206')
//         .wait(2000)
//         .type("{enter}")

//   })

//   it('Should be able to select option from dropdown menu for transportation options', () => {
//     cy.get('[class*="select-transport"]').click({force: true})
//         .type('w')
//         .type("{enter}")
//   })

//   it('Should be able to select option from dropdown menu for contact options', () => {
//     cy.get('[class*="select-contact"]').click({force: true})
//         .type('R')
//         .type("{enter}")
//   })

//   it('Should be able to click start trip button', () => {
//     cy.get('.submit-trip-btn').click({force: true})
//   })

// })