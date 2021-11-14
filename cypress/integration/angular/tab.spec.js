///<reference types="cypress" />


describe('angular tab app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/')
    })

    it('should add item with alert', () => {
        const stub = cy.stub()
        cy.on('window:alert', stub);
        cy.get('[formcontrolname="fName"]')
            .type("John")
        cy.get('[formcontrolname="lName"]')
            .type("Paul")
        cy.get('[formcontrolname="age"]')
            .type(24)
        cy.get('[formcontrolname="country"]')
            .type("India")

        cy.get('button').click()
        .then(()=>{
            expect(stub).to.be.calledWith("Data added successfully")
        })

    })

    it('should add new item', () => {
        cy.contains('div', 'All Employees').click();
        cy.get("table>tbody").find("tr").then((row) => {
            let prev = row.length;
            cy.contains('div', 'New Employee').click();
            cy.get('[formcontrolname="fName"]')
                .type("John")
            cy.get('[formcontrolname="lName"]')
                .type("Paul")
            cy.get('[formcontrolname="age"]')
                .type(24)
            cy.get('[formcontrolname="country"]')
                .type("India")

            cy.get('button').click();
            cy.contains('div', 'All Employees').click();

            cy.get("table>tbody").find("tr").then((r) => {
                cy.get(r).should('have.length', prev + 1);
            })
        })
    })

})
