Feature: creat a new board

    Scenario: validate that the user can creat a new board
    Given the user login to trello website
    When clicks on the create button
    And the user chooses the create board option 
    And types the board name in the board title input field
    And clicks on the create board button
    And clicks on the add list button 
    Then a list should be created successfully

