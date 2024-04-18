// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login',()=>{
        cy.visit("https://admin-demo.nopcommerce.com/")
        cy.get('[type="submit"]').click();
})

Cypress.Commands.add('searchForAProduct',()=>{
        cy.get(".nav-link").contains("Catalog").click({force: true})
        cy.get('[href="/Admin/Product/List"]').click({force:true})
        cy.get("#SearchProductName").type("laptop123",{force:true})
        cy.get("#search-products").click({force:true})

})