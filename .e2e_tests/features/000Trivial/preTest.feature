Feature: 00 Prepare the Database

  As a n00B
  I want to see something ANYTHING working
  So I can test from a visible starting point

  @watch
  Scenario: Check for Navigation line
    Given I have opened the main page : "http://localhost:3000/"
    When I click the "Home" link,
    Then I still see the page title "Mantra Voice".
