Feature: delete a list
    Scenario: validate that the user can delete a list
    Given the user login to trello website
    When the user chooses a board
    And the user clicks on the edit list button
    And the user clicks on the archiv this list button
    Then validate that there is no lists