@all
Feature:  Dasboard HomePage

  Scenario: Click Paket C
    Given User Login "qa.yubi17@gmail.com" as email "yubi1234" as password and direct to Dashboard
    And User Click Paket C
    Then User see Dasboard Paket C

  Scenario: Bell notif Feature
    Given User Login "qa.yubi17@gmail.com" as email "yubi1234" as password and direct to Dashboard
    And User Click Paket C
    Then User see Dasboard Paket C
    When Check bell Notif

  Scenario: Direct Message Feature
    Given User Login "qa.yubi17@gmail.com" as email "yubi1234" as password and direct to Dashboard
    And User Click Paket C
    Then User see Dasboard Paket C
    When Open and Input Direct Message to "yubihartland" as a name




