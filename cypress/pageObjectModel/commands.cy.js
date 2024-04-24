class createBoardActions{
    //methods used in board creations
    openTrelloWebsite(){
    cy.visit("https://id.atlassian.com/login?application=trello&continue=https%3A%2F%2Ftrello.com%2Fauth%2Fatlassian%2Fcallback%3FreturnUrl%3D%252F%26display%3D%26aaOnboarding%3D%26updateEmail%3D%26traceId%3D%26ssoVerified%3D%26createMember%3D&message=expired_token")
    cy.get("#username").type("amrotrteer@gmail.com")
    cy.get("#login-submit").click()
    cy.get("#password").type("trelloTest@1234")
    cy.get("#login-submit").click()
        
    }
    clickOnTheCreateBoard(){
        cy.origin('https://trello.com', () => {
            cy.get('[data-testid="header-create-menu-button"]').click()
            cy.wait(3000)
    })
        
    }
    clickOnCreateTheBoard(){
        cy.origin('https://trello.com', () => {
            cy.get("[data-testid='header-create-board-button']").click()
    })
       
    }
    typeTheBoardName(){
        cy.origin('https://trello.com', () => {
            cy.get('[data-testid="create-board-title-input"]').type('boardName')
        
    })
    }
       
    
    submitBoardCreation(){
        cy.origin('https://trello.com', () => {
            cy.get('[data-testid="create-board-submit-button"]').click()
           
    })
    }
    createAList(){
        
        cy.origin('https://trello.com', () => {
            cy.get('[placeholder="Enter list title…"]').type('name')
            cy.get('[data-testid="list-composer-add-list-button"]').click()
    })
    }
    listShouldBeCreated(){
        cy.origin('https://trello.com', () => {
            cy.get('[data-testid="list-composer-button"]').should('contain',"Add another list")
        })

    }

    }
    export default createBoardActions
    