@all
Feature: Board Feature

  Scenario: Board verify to the link page
    Given User Login "qa.yubi17@gmail.com" as email "yubi1234" as password and direct to Paket C
    And User go to Dasboard Paket C
    Then User see Board Page

  Scenario: Add Card Feature
    Given User Login "qa.yubi17@gmail.com" as email "yubi1234" as password and direct to Paket C
    And User go to Dasboard Paket C
    Then User see Board Page
    When User Add Card with "HaloTest" as name card

  Scenario: Quick Comment Feature
    Given User Login "qa.yubi17@gmail.com" as email "yubi1234" as password and direct to Paket C
    And User go to Dasboard Paket C
    Then User see Board Page
    When Input Quick Comment "Test 123" as comment

  Scenario: Add List Feature
    Given User Login "qa.yubi17@gmail.com" as email "yubi1234" as password and direct to Paket C
    And User go to Dasboard Paket C
    Then User see Board Page
    When Add list Feature and input "Feature Yubi" as name

  Scenario: Move Card Feature
    Given User Login "qa.yubi17@gmail.com" as email "yubi1234" as password and direct to Paket C
    And User go to Dasboard Paket C
    Then User see Board Page
    When Move Card YUBI TEST

  Scenario: Attach file in card board
    Given User Login "qa.yubi17@gmail.com" as email "yubi1234" as password and direct to Paket C
    And User go to Dasboard Paket C
    Then User see Board Page
    When Attach file in board card Yubi "C:\\Users\\yubihartland\\Desktop\\logo.png" as a file






