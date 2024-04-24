import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";
import createBoardActions from "../../../pageObjectModel/commands.cy";
const createBoard = new createBoardActions()
Given ("the user login to trello website",
createBoard.openTrelloWebsite
)
When("the user chooses a board",() => {
    cy.origin('https://trello.com', () => {
    cy.get(".board-tile-fade").first().click({force: true})
    
})
}
)
When("the user clicks on the edit list button",()=>{
    cy.origin('https://trello.com', () => {
    cy.get('[data-testid="list-edit-menu-button"]').click()
    cy.wait(2000)

})
})

When("the user clicks on the archiv this list button",() =>{
    cy.origin('https://trello.com', () => {
        cy.contains('a',"Archive this list").click()
    
      })
}
)
Then("validate that there is no lists",() =>{
    cy.origin('https://trello.com', () => {
        cy.get('[data-testid="list-composer-button"]').should('contain',"Add a list")
        
      })
}

)