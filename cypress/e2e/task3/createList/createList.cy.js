import{Given,When,Then}from "cypress-cucumber-preprocessor/steps";
import createBoardActions from "../../../pageObjectModel/commands.cy.js";

const createBoard = new createBoardActions()

//before(createBoard.openTrelloWebsite)


Given("the user login to trello website",
   createBoard.openTrelloWebsite
)
When("clicks on the create button",
    createBoard.clickOnTheCreateBoard
)
When("the user chooses the create board option",
    createBoard.clickOnCreateTheBoard
)
When("types the board name in the board title input field",
    createBoard.typeTheBoardName
)
When("clicks on the create board button",
createBoard.submitBoardCreation
)
When("clicks on the add list button",
createBoard.createAList
)
Then("a list should be created successfully",
createBoard.listShouldBeCreated
)