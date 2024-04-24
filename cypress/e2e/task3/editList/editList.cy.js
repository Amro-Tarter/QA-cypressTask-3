import { Given,When,Then } from "cypress-cucumber-preprocessor/steps"
import createBoardActions from "../../../pageObjectModel/commands.cy";
const createBoard = new createBoardActions()


Given("the user login to trello website",
    createBoard.openTrelloWebsite
)
When("the user open's a board",() => {
    cy.origin('https://trello.com', () => {
    cy.get(".board-tile-fade").first().click({force: true})
    cy.get('[type="button"]').parent('[data-testid="list-header"]').click()
    cy.wait(2000)

})
})
When("the user edits a list",()=>{
    cy.origin('https://trello.com', () => {
        cy.get('[data-testid="list-name-textarea"]').type('newName')
    })
})

Then("a list should be edited",()=>{
    cy.origin('https://trello.com', () => {
        cy.get('[data-testid="list-name-textarea"]').should('contain','newName')
    })
    
})