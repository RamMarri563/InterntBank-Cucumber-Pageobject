@tag
Feature: Test login functionality

  Scenario Outline: Check login successful with valid credentials
    Given Browser is open
    And User is in loginpage
    When User enters "<username>" and "<password>"
    Then User click on submit button

    Examples: 
    | username   | password |
    | mngr563276 | nevujAr  |
    | name2      | 34768    |
