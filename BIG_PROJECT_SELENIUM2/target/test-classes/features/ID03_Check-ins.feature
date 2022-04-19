@all
Feature: Check-Ins Feature

  Scenario: Check-ins verify to the link page
    Given User Login "qa.yubi17@gmail.com" as email "yubi1234" as password and direct to Paket C
    And User go to Dasboard Paket C
    Then User see Check-ins page

  Scenario: Create checkin
    Given User Login "qa.yubi17@gmail.com" as email "yubi1234" as password and direct to Paket C
    And User go to Dasboard Paket C
    Then User see Check-ins page
    When User Click Create Checkin

  Scenario: Input Question Box
    Given User Login "qa.yubi17@gmail.com" as email "yubi1234" as password and direct to Paket C
    And User go to Dasboard Paket C
    Then User see Check-ins page
    When input "Meeting" in question box

  Scenario: Choose Day Ask Button
    Given User Login "qa.yubi17@gmail.com" as email "yubi1234" as password and direct to Paket C
    And User go to Dasboard Paket C
    Then User see Check-ins page
    When Click day and Choose Monday until Sunday

  Scenario: Member Tag Feature
    Given User Login "qa.yubi17@gmail.com" as email "yubi1234" as password and direct to Paket C
    And User go to Dasboard Paket C
    Then User see Check-ins page
    When User Tag Member yubihartland

  Scenario: Private Check Button
    Given User Login "qa.yubi17@gmail.com" as email "yubi1234" as password and direct to Paket C
    And User go to Dasboard Paket C
    Then User see Check-ins page
    When User Click private check

  Scenario: Start Collecting Answer Button
    Given User Login "qa.yubi17@gmail.com" as email "yubi1234" as password and direct to Paket C
    And User go to Dasboard Paket C
    Then User see Check-ins page
    When User input "Meeting" as Question and Click Start Collecting Answer

  Scenario: Cancel Start Collecting Answer Button
    Given User Login "qa.yubi17@gmail.com" as email "yubi1234" as password and direct to Paket C
    And User go to Dasboard Paket C
    Then User see Check-ins page
    When Click Cancel Button And go to Checkin Page

  Scenario: Click Data Checkin
    Given User Login "qa.yubi17@gmail.com" as email "yubi1234" as password and direct to Paket C
    And User go to Dasboard Paket C
    Then User see Check-ins page
    When Click Data Checkin and verify

  Scenario: Home Button
    Given User Login "qa.yubi17@gmail.com" as email "yubi1234" as password and direct to Paket C
    And User go to Dasboard Paket C
    Then User see Check-ins page
    When Click Home Button

  Scenario: Comment Data Chekin
    Given User Login "qa.yubi17@gmail.com" as email "yubi1234" as password and direct to Paket C
    And User go to Dasboard Paket C
    Then User see Check-ins page
    When Input "Test" as Comment and save Comment


  Scenario: Set Date Feature
    Given User Login "qa.yubi17@gmail.com" as email "yubi1234" as password and direct to Paket C
    And User go to Dasboard Paket C
    Then User see Check-ins page
    When Set Date "11.00 AM" as a time


  Scenario: Null Day Input
    Given User Login "qa.yubi17@gmail.com" as email "yubi1234" as password and direct to Paket C
    And User go to Dasboard Paket C
    Then User see Check-ins page
    When Input "TEST123" in Question box
    And Null Input Day with verify response


