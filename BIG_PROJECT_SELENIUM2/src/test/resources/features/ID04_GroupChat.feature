@all
Feature: Group Chat Feature

  Scenario: Group Chat verify to the link page
    Given User Login "qa.yubi17@gmail.com" as email "yubi1234" as password and direct to Paket C
    And User go to Dasboard Paket C
    Then User see Group Chat page

  Scenario: Group Chat Input
    Given User Login "qa.yubi17@gmail.com" as email "yubi1234" as password and direct to Paket C
    And User go to Dasboard Paket C
    Then User see Group Chat page
    When Input "Halo" as a Chat and Send

  Scenario: Verify Chat
    Given User Login "qa.yubi17@gmail.com" as email "yubi1234" as password and direct to Paket C
    And User go to Dasboard Paket C
    Then User see Group Chat page
    When Verify "Halo" as a Chat

  Scenario: Tag member chat
    Given User Login "qa.yubi17@gmail.com" as email "yubi1234" as password and direct to Paket C
    And User go to Dasboard Paket C
    Then User see Group Chat page
    When Tag "@yubihartland" as member

  Scenario: Attach file in collom chat
    Given User Login "qa.yubi17@gmail.com" as email "yubi1234" as password and direct to Paket C
    And User go to Dasboard Paket C
    Then User see Group Chat page
    When Attach file "C:\\Users\\yubihartland\\Desktop\\logo.png" as a file

  Scenario: Send Null Chat
    Given User Login "qa.yubi17@gmail.com" as email "yubi1234" as password and direct to Paket C
    And User go to Dasboard Paket C
    Then User see Group Chat page
    When Input Null Chat With Verify it








