import { aliasQuery, aliasMutation } from '../utils/graphql-test-utils';

describe('Show main view of walk-safe App', () => {

beforeEach(() => {
    cy.intercept('POST', 'http://localhost:3000/graphql', (req) => {
      // Queries
      aliasQuery(req, 'GetUser')

      // Mutations
      // aliasMutation(req, 'PlanTrip')
    })
  })

  it('Should be able to visit the main page', () => {
    cy.visit('http://localhost:3000')
    cy.url().should('eq', 'http://localhost:3000/')
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

  it('Should be able to type into the search input and see that value in the start point input', () => {
    cy.get('.start-point').type('6245 Garrison St, Arvada, CO 80004')
        .should('have.value', '6245 Garrison St, Arvada, CO 80004')
  })

  it('Should be able to type into the search input and see that value in the start point input', () => {
    cy.get('.end-point').type('1602 Garfield St, Denver, CO 80206')
        .should('have.value', '1602 Garfield St, Denver, CO 80206')
  })
  
  it('Should be able to click start trip button', () => {
    cy.get('.submit-trip-btn').click()
  })
})