/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('http://localhost:4200/')
    })

    it('should add new item', async ()=>{
        //cy.contains('div','All Employees').click();
        cy
            .get('[formcontrolname="fName"]')
            .type("John")
        cy
            .get('[formcontrolname="lName"]')
            .type("Paul")
        cy
            .get('[formcontrolname="age"]')
            .type(24)
        cy
            .get('[formcontrolname="country"]')
            .type("India")
        
        cy.get('button').click();
        cy.contains('div','All Employees').click();
        console.log('fggf ', cy.get("table>tbody>tr").children.length);
        cy.get("table>tbody").find("tr").then((row)=>{
            cy.get(row).should('have.length',2);
        })

        
    })

  })
  