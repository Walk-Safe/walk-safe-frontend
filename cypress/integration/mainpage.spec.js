import { aliasQuery, aliasMutation } from '../utils/graphql-test-utils';
// Cypress.env('host');
// Cypress.env('api_server');

describe('Show main view of walk-safe App', () => {

beforeEach(() => {
  // Cypress.env('host');
  // Cypress.env('api_server');
  // cy.request(Cypress.env('https://walk-safe-backend-staging.herokuapp.com/'));
    cy.intercept('POST', 'https://walk-safe-backend.herokuapp.com/', (req) => {
      // Queries
      aliasQuery(req, 'GetUser')

      // Mutations
      aliasMutation(req, 'CreateTrip')
    })
  })

  it('Should be able to visit the main page', () => {
    cy.visit('https://walk-safe-frontend.herokuapp.com/')
    cy.url().should('eq', 'https://walk-safe-frontend.herokuapp.com/')
  });

  it('Should display title on main page view', () => {
    cy.get('.app-header').should('contain', 'WALK SAFE')
  });

  it('Should greet user on main page view', () => {
    cy.get('.welcome-msg').should('contain', 'Welcome')
  });

  it('Should display a dropdown menu on burger button click', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('.hamburger-menu').find('a').should('have.length', 3)
  });

  it('Should render main form from its component', () => {
    cy.get('.trip-form').should('be.visible')
    cy.get('.start-point').should('be.visible')
    cy.get('.end-point').should('be.visible')
    cy.get('.select-transport').should('be.visible',)
    cy.get('.select-contact').should('be.visible')
    cy.get('.submit-trip-btn').should('be.visible')
  });


  it("Should contain a start-point input", () => {
    cy.get('input[placeholder="Starting address"]')
        .get('input[type="text"]')
  })

  it("Should contain a end-point input", () => {
    cy.get('input[placeholder="Final address"]')
        .get('input[type="text"]')
  })

  // it('Should be able to type into the search input and see that value in the start point input', () => {
  //   cy.get('.start-point').type('6245 Garrison St, Arvada, CO 80004')
  //       .should('have.value', '6245 Garrison St, Arvada, CO 80004')
  //       .wait(2000)
  //       .type('{downarrow}')
  //       .type("{enter}")
  //       .wait(500)
  //
  // })


  // it('Should be able to type into the search input and see that value in the end point input', () => {
  //   cy.get('.end-point').type('1602 South Garfield St, Denver, CO 80206')
  //       .should('have.value', '1602 South Garfield St, Denver, CO 80206')
  //       .wait(2000)
  //       .type('{downarrow}', '{enter}')
  //
  // })

  // it('Should be able to select option from dropdown menu for transportation options', () => {
  //   cy.get('[class*="select-transport"]').click({force: true})
  // })

  // it('Should be able to select option from dropdown menu for contact options', () => {
  //   cy.get('[class*="select-contact"]').click({force: true})
  // })

  // it('Should be able to click start trip button', () => {
  //   cy.get('.submit-trip-btn').click({force: true})
  // })
})
