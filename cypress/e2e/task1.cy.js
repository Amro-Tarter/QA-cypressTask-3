///<reference types="cypress"/>
describe("selectors",()=>{
    beforeEach("open the demo site",()=>{
    
    cy.visit("https://demo.productionready.io/#/register");
})
it("get the conduit text selector",()=>{
    cy.get('[ui-sref="app.home"]');
})
it("get the home button selector",()=>{
    cy.get(".nav-link").contains("Home");
})
it("get the sign up button selector",()=>{
    cy.get('[ui-sref="app.register"]')
})
it("get the sign up label selector",()=>{
    cy.get('[ng-bind="$ctrl.title"]');
})
it("get the have an account? link selector",()=>{
    cy.contains('a','Have an account?')
})
it("get the username textfield selector",()=>{
    cy.get('[placeholder="Username"]')
})
it("get the Email textfield selector",()=>{
    cy.get('[type="email"]');
})
it("get the Password textfield selector",()=>{
    cy.get('[placeholder="Password"]')
})
it("get the sign up button selector",()=>{
    cy.get('[type="submit"]').contains("Sign up");
})
it("get the site link at the footer selector",()=>{
    cy.get('[ng-bind="::$ctrl.appName | lowercase"]').last()
})
it("get the authorization code selector in the footer",()=>{
    cy.get('[class="attribution ng-binding"]')
    
})


})