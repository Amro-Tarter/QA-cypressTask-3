Feature: edit a list
    Scenario: validate that the user can edit a list
    Given the user login to trello website
    When the user open's a board
    And the user edits a list
    Then a list should be edited