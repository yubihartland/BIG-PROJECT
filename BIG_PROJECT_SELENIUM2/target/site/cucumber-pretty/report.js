$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/ID01_Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.before({
  "duration": 7215046400,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Normal Login",
  "description": "",
  "id": "login-feature;normal-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User open the Cicle Sign page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User input \"qa.yubi17@gmail.com\" as email \"yubi1234\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User see dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyLoginPageIsDisplayed()"
});
formatter.result({
  "duration": 1971217500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qa.yubi17@gmail.com",
      "offset": 12
    },
    {
      "val": "yubi1234",
      "offset": 43
    }
  ],
  "location": "LoginSteps.inputCreadential(String,String)"
});
formatter.result({
  "duration": 5213587300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.isDashboardIsDisplayed()"
});
formatter.result({
  "duration": 4785725400,
  "status": "passed"
});
formatter.after({
  "duration": 1800167600,
  "status": "passed"
});
formatter.uri("features/ID02_DashboardPaketC.feature");
formatter.feature({
  "line": 2,
  "name": "Dasboard HomePage",
  "description": "",
  "id": "dasboard-homepage",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.before({
  "duration": 11363580300,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Click Paket C",
  "description": "",
  "id": "dasboard-homepage;click-paket-c",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User Login \"qa.yubi17@gmail.com\" as email \"yubi1234\" as password and direct to Dashboard",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Click Paket C",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User see Dasboard Paket C",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "qa.yubi17@gmail.com",
      "offset": 12
    },
    {
      "val": "yubi1234",
      "offset": 43
    }
  ],
  "location": "DasboardPaketCSteps.loginToAccountPage(String,String)"
});
formatter.result({
  "duration": 9893401300,
  "status": "passed"
});
formatter.match({
  "location": "DasboardPaketCSteps.verifyClickPaket()"
});
formatter.result({
  "duration": 9757490100,
  "status": "passed"
});
formatter.match({
  "location": "DasboardPaketCSteps.isDashboardIsDisplayed()"
});
formatter.result({
  "duration": 5094237800,
  "status": "passed"
});
formatter.after({
  "duration": 892523800,
  "status": "passed"
});
formatter.before({
  "duration": 4300495800,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Bell notif Feature",
  "description": "",
  "id": "dasboard-homepage;bell-notif-feature",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "User Login \"qa.yubi17@gmail.com\" as email \"yubi1234\" as password and direct to Dashboard",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User Click Paket C",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User see Dasboard Paket C",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Check bell Notif",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "qa.yubi17@gmail.com",
      "offset": 12
    },
    {
      "val": "yubi1234",
      "offset": 43
    }
  ],
  "location": "DasboardPaketCSteps.loginToAccountPage(String,String)"
});
formatter.result({
  "duration": 9863070400,
  "status": "passed"
});
formatter.match({
  "location": "DasboardPaketCSteps.verifyClickPaket()"
});
formatter.result({
  "duration": 5236486200,
  "status": "passed"
});
formatter.match({
  "location": "DasboardPaketCSteps.isDashboardIsDisplayed()"
});
formatter.result({
  "duration": 5099825000,
  "status": "passed"
});
formatter.match({
  "location": "DasboardPaketCSteps.checkBellNotif()"
});
formatter.result({
  "duration": 16145263000,
  "status": "passed"
});
formatter.after({
  "duration": 892538400,
  "status": "passed"
});
formatter.before({
  "duration": 4536966500,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Direct Message Feature",
  "description": "",
  "id": "dasboard-homepage;direct-message-feature",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "User Login \"qa.yubi17@gmail.com\" as email \"yubi1234\" as password and direct to Dashboard",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User Click Paket C",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User see Dasboard Paket C",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Open and Input Direct Message to \"yubihartland\" as a name",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "qa.yubi17@gmail.com",
      "offset": 12
    },
    {
      "val": "yubi1234",
      "offset": 43
    }
  ],
  "location": "DasboardPaketCSteps.loginToAccountPage(String,String)"
});
formatter.result({
  "duration": 9916291500,
  "status": "passed"
});
formatter.match({
  "location": "DasboardPaketCSteps.verifyClickPaket()"
});
formatter.result({
  "duration": 5216167500,
  "status": "passed"
});
formatter.match({
  "location": "DasboardPaketCSteps.isDashboardIsDisplayed()"
});
formatter.result({
  "duration": 5084392100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "yubihartland",
      "offset": 34
    }
  ],
  "location": "DasboardPaketCSteps.directMessage(String)"
});
formatter.result({
  "duration": 32569113400,
  "status": "passed"
});
formatter.after({
  "duration": 906970100,
  "status": "passed"
});
formatter.uri("features/ID03_Check-ins.feature");
formatter.feature({
  "line": 2,
  "name": "Check-Ins Feature",
  "description": "",
  "id": "check-ins-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.before({
  "duration": 4429456400,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Check-ins verify to the link page",
  "description": "",
  "id": "check-ins-feature;check-ins-verify-to-the-link-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User Login \"qa.yubi17@gmail.com\" as email \"yubi1234\" as password and direct to Paket C",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User go to Dasboard Paket C",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User see Check-ins page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "qa.yubi17@gmail.com",
      "offset": 12
    },
    {
      "val": "yubi1234",
      "offset": 43
    }
  ],
  "location": "CheckinsSteps.inputCreadential(String,String)"
});
formatter.result({
  "duration": 11939993900,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.verifyClickPaket()"
});
formatter.result({
  "duration": 8252935100,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.isDashboardIsDisplayed()"
});
formatter.result({
  "duration": 10313109700,
  "status": "passed"
});
formatter.after({
  "duration": 923540000,
  "status": "passed"
});
formatter.before({
  "duration": 4110277500,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Create checkin",
  "description": "",
  "id": "check-ins-feature;create-checkin",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "User Login \"qa.yubi17@gmail.com\" as email \"yubi1234\" as password and direct to Paket C",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User go to Dasboard Paket C",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User see Check-ins page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User Click Create Checkin",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "qa.yubi17@gmail.com",
      "offset": 12
    },
    {
      "val": "yubi1234",
      "offset": 43
    }
  ],
  "location": "CheckinsSteps.inputCreadential(String,String)"
});
formatter.result({
  "duration": 11855871700,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.verifyClickPaket()"
});
formatter.result({
  "duration": 8250962400,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.isDashboardIsDisplayed()"
});
formatter.result({
  "duration": 5308129800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h1[.\u003d\u0027Check-Ins\u0027]\"}\n  (Session info: chrome\u003d100.0.4896.127)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027YUBIHARTLAND\u0027, ip: \u0027192.168.100.6\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_321\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.127, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\YUBIHA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:51555}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e9b16930288373bc3aaf469599743718\n*** Element info: {Using\u003dxpath, value\u003d//h1[.\u003d\u0027Check-Ins\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\r\n\tat pageObject.CheckinsPage.isPageDisplayedCheckins(CheckinsPage.java:149)\r\n\tat StepDefinitions.CheckinsSteps.isDashboardIsDisplayed(CheckinsSteps.java:51)\r\n\tat ✽.Then User see Check-ins page(features/ID03_Check-ins.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CheckinsSteps.clickCreateCheckin()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1176409800,
  "status": "passed"
});
formatter.before({
  "duration": 5062931000,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Input Question Box",
  "description": "",
  "id": "check-ins-feature;input-question-box",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "User Login \"qa.yubi17@gmail.com\" as email \"yubi1234\" as password and direct to Paket C",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User go to Dasboard Paket C",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User see Check-ins page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "input \"Meeting\" in question box",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "qa.yubi17@gmail.com",
      "offset": 12
    },
    {
      "val": "yubi1234",
      "offset": 43
    }
  ],
  "location": "CheckinsSteps.inputCreadential(String,String)"
});
formatter.result({
  "duration": 12351893800,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.verifyClickPaket()"
});
formatter.result({
  "duration": 8217177000,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.isDashboardIsDisplayed()"
});
formatter.result({
  "duration": 10286452400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Meeting",
      "offset": 7
    }
  ],
  "location": "CheckinsSteps.inputQuestionBox(String)"
});
formatter.result({
  "duration": 7470800000,
  "status": "passed"
});
formatter.after({
  "duration": 859475700,
  "status": "passed"
});
formatter.before({
  "duration": 9092311900,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Choose Day Ask Button",
  "description": "",
  "id": "check-ins-feature;choose-day-ask-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "User Login \"qa.yubi17@gmail.com\" as email \"yubi1234\" as password and direct to Paket C",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User go to Dasboard Paket C",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User see Check-ins page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Click day and Choose Monday until Sunday",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "qa.yubi17@gmail.com",
      "offset": 12
    },
    {
      "val": "yubi1234",
      "offset": 43
    }
  ],
  "location": "CheckinsSteps.inputCreadential(String,String)"
});
formatter.result({
  "duration": 11749784100,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.verifyClickPaket()"
});
formatter.result({
  "duration": 8233084400,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.isDashboardIsDisplayed()"
});
formatter.result({
  "duration": 10302869800,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.clickAndChooseDay()"
});
formatter.result({
  "duration": 16035277300,
  "status": "passed"
});
formatter.after({
  "duration": 939112000,
  "status": "passed"
});
formatter.before({
  "duration": 9362722200,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Member Tag Feature",
  "description": "",
  "id": "check-ins-feature;member-tag-feature",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "User Login \"qa.yubi17@gmail.com\" as email \"yubi1234\" as password and direct to Paket C",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User go to Dasboard Paket C",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User see Check-ins page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User Tag Member yubihartland",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "qa.yubi17@gmail.com",
      "offset": 12
    },
    {
      "val": "yubi1234",
      "offset": 43
    }
  ],
  "location": "CheckinsSteps.inputCreadential(String,String)"
});
formatter.result({
  "duration": 11762229000,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.verifyClickPaket()"
});
formatter.result({
  "duration": 9668189200,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.isDashboardIsDisplayed()"
});
formatter.result({
  "duration": 10253824900,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.ClicktagMember()"
});
formatter.result({
  "duration": 10570246700,
  "status": "passed"
});
formatter.after({
  "duration": 915829000,
  "status": "passed"
});
formatter.before({
  "duration": 4240828100,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Private Check Button",
  "description": "",
  "id": "check-ins-feature;private-check-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "User Login \"qa.yubi17@gmail.com\" as email \"yubi1234\" as password and direct to Paket C",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User go to Dasboard Paket C",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User see Check-ins page",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "User Click private check",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "qa.yubi17@gmail.com",
      "offset": 12
    },
    {
      "val": "yubi1234",
      "offset": 43
    }
  ],
  "location": "CheckinsSteps.inputCreadential(String,String)"
});
formatter.result({
  "duration": 11896345800,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.verifyClickPaket()"
});
formatter.result({
  "duration": 8201170500,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.isDashboardIsDisplayed()"
});
formatter.result({
  "duration": 10282382000,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.privateCheck()"
});
formatter.result({
  "duration": 7385873700,
  "status": "passed"
});
formatter.after({
  "duration": 903693900,
  "status": "passed"
});
formatter.before({
  "duration": 4601279900,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Start Collecting Answer Button",
  "description": "",
  "id": "check-ins-feature;start-collecting-answer-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "User Login \"qa.yubi17@gmail.com\" as email \"yubi1234\" as password and direct to Paket C",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "User go to Dasboard Paket C",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User see Check-ins page",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "User input \"Meeting\" as Question and Click Start Collecting Answer",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "qa.yubi17@gmail.com",
      "offset": 12
    },
    {
      "val": "yubi1234",
      "offset": 43
    }
  ],
  "location": "CheckinsSteps.inputCreadential(String,String)"
});
formatter.result({
  "duration": 11845486600,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.verifyClickPaket()"
});
formatter.result({
  "duration": 8217996400,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.isDashboardIsDisplayed()"
});
formatter.result({
  "duration": 10284487900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Meeting",
      "offset": 12
    }
  ],
  "location": "CheckinsSteps.ClickstartCollecting(String)"
});
formatter.result({
  "duration": 12621017800,
  "status": "passed"
});
formatter.after({
  "duration": 968897800,
  "status": "passed"
});
formatter.before({
  "duration": 4874018900,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Cancel Start Collecting Answer Button",
  "description": "",
  "id": "check-ins-feature;cancel-start-collecting-answer-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 46,
  "name": "User Login \"qa.yubi17@gmail.com\" as email \"yubi1234\" as password and direct to Paket C",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "User go to Dasboard Paket C",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User see Check-ins page",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Click Cancel Button And go to Checkin Page",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "qa.yubi17@gmail.com",
      "offset": 12
    },
    {
      "val": "yubi1234",
      "offset": 43
    }
  ],
  "location": "CheckinsSteps.inputCreadential(String,String)"
});
formatter.result({
  "duration": 12136297700,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.verifyClickPaket()"
});
formatter.result({
  "duration": 8187698200,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.isDashboardIsDisplayed()"
});
formatter.result({
  "duration": 10328078400,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.cancelStartCollectingButton()"
});
formatter.result({
  "duration": 12524620300,
  "status": "passed"
});
formatter.after({
  "duration": 1048309400,
  "status": "passed"
});
formatter.before({
  "duration": 4562679300,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Click Data Checkin",
  "description": "",
  "id": "check-ins-feature;click-data-checkin",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 52,
  "name": "User Login \"qa.yubi17@gmail.com\" as email \"yubi1234\" as password and direct to Paket C",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "User go to Dasboard Paket C",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User see Check-ins page",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "Click Data Checkin and verify",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "qa.yubi17@gmail.com",
      "offset": 12
    },
    {
      "val": "yubi1234",
      "offset": 43
    }
  ],
  "location": "CheckinsSteps.inputCreadential(String,String)"
});
formatter.result({
  "duration": 11864585800,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.verifyClickPaket()"
});
formatter.result({
  "duration": 8237261800,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.isDashboardIsDisplayed()"
});
formatter.result({
  "duration": 10296356100,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.clickDataheckin()"
});
formatter.result({
  "duration": 9295654700,
  "status": "passed"
});
formatter.after({
  "duration": 922956800,
  "status": "passed"
});
formatter.before({
  "duration": 4581435500,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Home Button",
  "description": "",
  "id": "check-ins-feature;home-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 58,
  "name": "User Login \"qa.yubi17@gmail.com\" as email \"yubi1234\" as password and direct to Paket C",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "User go to Dasboard Paket C",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User see Check-ins page",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "Click Home Button",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "qa.yubi17@gmail.com",
      "offset": 12
    },
    {
      "val": "yubi1234",
      "offset": 43
    }
  ],
  "location": "CheckinsSteps.inputCreadential(String,String)"
});
formatter.result({
  "duration": 11784055400,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.verifyClickPaket()"
});
formatter.result({
  "duration": 8248375200,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.isDashboardIsDisplayed()"
});
formatter.result({
  "duration": 10314121700,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.clickHomeButton()"
});
formatter.result({
  "duration": 9356639100,
  "status": "passed"
});
formatter.after({
  "duration": 890389000,
  "status": "passed"
});
formatter.before({
  "duration": 4609398200,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Comment Data Chekin",
  "description": "",
  "id": "check-ins-feature;comment-data-chekin",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 64,
  "name": "User Login \"qa.yubi17@gmail.com\" as email \"yubi1234\" as password and direct to Paket C",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "User go to Dasboard Paket C",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "User see Check-ins page",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "Input \"Test\" as Comment and save Comment",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "qa.yubi17@gmail.com",
      "offset": 12
    },
    {
      "val": "yubi1234",
      "offset": 43
    }
  ],
  "location": "CheckinsSteps.inputCreadential(String,String)"
});
formatter.result({
  "duration": 11798410800,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.verifyClickPaket()"
});
formatter.result({
  "duration": 8249007800,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.isDashboardIsDisplayed()"
});
formatter.result({
  "duration": 10302949800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 7
    }
  ],
  "location": "CheckinsSteps.InputComment(String)"
});
formatter.result({
  "duration": 17900661500,
  "status": "passed"
});
formatter.after({
  "duration": 974433400,
  "status": "passed"
});
formatter.before({
  "duration": 4593497200,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "Set Date Feature",
  "description": "",
  "id": "check-ins-feature;set-date-feature",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 71,
  "name": "User Login \"qa.yubi17@gmail.com\" as email \"yubi1234\" as password and direct to Paket C",
  "keyword": "Given "
});
formatter.step({
  "line": 72,
  "name": "User go to Dasboard Paket C",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "User see Check-ins page",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "Set Date \"11.00 AM\" as a time",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "qa.yubi17@gmail.com",
      "offset": 12
    },
    {
      "val": "yubi1234",
      "offset": 43
    }
  ],
  "location": "CheckinsSteps.inputCreadential(String,String)"
});
formatter.result({
  "duration": 11787282500,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.verifyClickPaket()"
});
formatter.result({
  "duration": 8251150600,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.isDashboardIsDisplayed()"
});
formatter.result({
  "duration": 10269322000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11.00 AM",
      "offset": 10
    }
  ],
  "location": "CheckinsSteps.SetdateCheckIn(String)"
});
formatter.result({
  "duration": 9628967800,
  "status": "passed"
});
formatter.after({
  "duration": 906927300,
  "status": "passed"
});
formatter.before({
  "duration": 4738760900,
  "status": "passed"
});
formatter.scenario({
  "line": 77,
  "name": "Null Day Input",
  "description": "",
  "id": "check-ins-feature;null-day-input",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 78,
  "name": "User Login \"qa.yubi17@gmail.com\" as email \"yubi1234\" as password and direct to Paket C",
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "User go to Dasboard Paket C",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "User see Check-ins page",
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "Input \"TEST123\" in Question box",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "Null Input Day with verify response",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "qa.yubi17@gmail.com",
      "offset": 12
    },
    {
      "val": "yubi1234",
      "offset": 43
    }
  ],
  "location": "CheckinsSteps.inputCreadential(String,String)"
});
formatter.result({
  "duration": 11731471900,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.verifyClickPaket()"
});
formatter.result({
  "duration": 8233703300,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.isDashboardIsDisplayed()"
});
formatter.result({
  "duration": 10309996200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST123",
      "offset": 7
    }
  ],
  "location": "CheckinsSteps.InputBoxNoDay(String)"
});
formatter.result({
  "duration": 12555210100,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.NullDayInput()"
});
formatter.result({
  "duration": 17493577300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\" //h1[.\u003d\u0027What question do you want to ask?\u0027]\"}\n  (Session info: chrome\u003d100.0.4896.127)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027YUBIHARTLAND\u0027, ip: \u0027192.168.100.6\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_321\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.127, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\YUBIHA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:52214}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ff48c1cde3dc93e0c6356556ea569ff9\n*** Element info: {Using\u003dxpath, value\u003d //h1[.\u003d\u0027What question do you want to ask?\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\r\n\tat pageObject.CheckinsPage.verifyNullDay(CheckinsPage.java:269)\r\n\tat StepDefinitions.CheckinsSteps.NullDayInput(CheckinsSteps.java:213)\r\n\tat ✽.And Null Input Day with verify response(features/ID03_Check-ins.feature:82)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1151012700,
  "status": "passed"
});
formatter.uri("features/ID04_GroupChat.feature");
formatter.feature({
  "line": 2,
  "name": "Group Chat Feature",
  "description": "",
  "id": "group-chat-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.before({
  "duration": 4264853300,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Group Chat verify to the link page",
  "description": "",
  "id": "group-chat-feature;group-chat-verify-to-the-link-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User Login \"qa.yubi17@gmail.com\" as email \"yubi1234\" as password and direct to Paket C",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User go to Dasboard Paket C",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User see Group Chat page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "qa.yubi17@gmail.com",
      "offset": 12
    },
    {
      "val": "yubi1234",
      "offset": 43
    }
  ],
  "location": "CheckinsSteps.inputCreadential(String,String)"
});
formatter.result({
  "duration": 11845935000,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.verifyClickPaket()"
});
formatter.result({
  "duration": 8230543000,
  "status": "passed"
});
formatter.match({
  "location": "GroupChatSteps.verifyDasboardGroupChat()"
});
formatter.result({
  "duration": 9377821400,
  "status": "passed"
});
formatter.after({
  "duration": 1063295900,
  "status": "passed"
});
formatter.before({
  "duration": 4556465200,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Group Chat Input",
  "description": "",
  "id": "group-chat-feature;group-chat-input",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "User Login \"qa.yubi17@gmail.com\" as email \"yubi1234\" as password and direct to Paket C",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User go to Dasboard Paket C",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User see Group Chat page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Input \"Halo\" as a Chat and Send",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "qa.yubi17@gmail.com",
      "offset": 12
    },
    {
      "val": "yubi1234",
      "offset": 43
    }
  ],
  "location": "CheckinsSteps.inputCreadential(String,String)"
});
formatter.result({
  "duration": 11699824200,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.verifyClickPaket()"
});
formatter.result({
  "duration": 8245268000,
  "status": "passed"
});
formatter.match({
  "location": "GroupChatSteps.verifyDasboardGroupChat()"
});
formatter.result({
  "duration": 9314269500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Halo",
      "offset": 7
    }
  ],
  "location": "GroupChatSteps.inputTextSend(String)"
});
formatter.result({
  "duration": 13393523300,
  "status": "passed"
});
formatter.after({
  "duration": 1044658400,
  "status": "passed"
});
formatter.before({
  "duration": 4823372900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify Chat",
  "description": "",
  "id": "group-chat-feature;verify-chat",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "User Login \"qa.yubi17@gmail.com\" as email \"yubi1234\" as password and direct to Paket C",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User go to Dasboard Paket C",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User see Group Chat page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Verify \"Halo\" as a Chat",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "qa.yubi17@gmail.com",
      "offset": 12
    },
    {
      "val": "yubi1234",
      "offset": 43
    }
  ],
  "location": "CheckinsSteps.inputCreadential(String,String)"
});
formatter.result({
  "duration": 11882611000,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.verifyClickPaket()"
});
formatter.result({
  "duration": 8247376200,
  "status": "passed"
});
formatter.match({
  "location": "GroupChatSteps.verifyDasboardGroupChat()"
});
formatter.result({
  "duration": 9345568200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Halo",
      "offset": 8
    }
  ],
  "location": "GroupChatSteps.verifyTextChat(String)"
});
formatter.result({
  "duration": 11089414900,
  "status": "passed"
});
formatter.after({
  "duration": 960835300,
  "status": "passed"
});
formatter.before({
  "duration": 4511444100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Tag member chat",
  "description": "",
  "id": "group-chat-feature;tag-member-chat",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "User Login \"qa.yubi17@gmail.com\" as email \"yubi1234\" as password and direct to Paket C",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User go to Dasboard Paket C",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User see Group Chat page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Tag \"@yubihartland\" as member",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "qa.yubi17@gmail.com",
      "offset": 12
    },
    {
      "val": "yubi1234",
      "offset": 43
    }
  ],
  "location": "CheckinsSteps.inputCreadential(String,String)"
});
formatter.result({
  "duration": 11801148600,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.verifyClickPaket()"
});
formatter.result({
  "duration": 8213834700,
  "status": "passed"
});
formatter.match({
  "location": "GroupChatSteps.verifyDasboardGroupChat()"
});
formatter.result({
  "duration": 9303015500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "@yubihartland",
      "offset": 5
    }
  ],
  "location": "GroupChatSteps.inputTagMember(String)"
});
formatter.result({
  "duration": 12724315800,
  "status": "passed"
});
formatter.after({
  "duration": 949244300,
  "status": "passed"
});
formatter.before({
  "duration": 4622014500,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Attach file in collom chat",
  "description": "",
  "id": "group-chat-feature;attach-file-in-collom-chat",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "User Login \"qa.yubi17@gmail.com\" as email \"yubi1234\" as password and direct to Paket C",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User go to Dasboard Paket C",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User see Group Chat page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Attach file \"C:\\\\Users\\\\yubihartland\\\\Desktop\\\\logo.png\" as a file",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "qa.yubi17@gmail.com",
      "offset": 12
    },
    {
      "val": "yubi1234",
      "offset": 43
    }
  ],
  "location": "CheckinsSteps.inputCreadential(String,String)"
});
formatter.result({
  "duration": 11907569700,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.verifyClickPaket()"
});
formatter.result({
  "duration": 8215023500,
  "status": "passed"
});
formatter.match({
  "location": "GroupChatSteps.verifyDasboardGroupChat()"
});
formatter.result({
  "duration": 9364449500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C:\\\\Users\\\\yubihartland\\\\Desktop\\\\logo.png",
      "offset": 13
    }
  ],
  "location": "GroupChatSteps.attachFile(String)"
});
formatter.result({
  "duration": 6152606700,
  "status": "passed"
});
formatter.after({
  "duration": 976397000,
  "status": "passed"
});
formatter.before({
  "duration": 4177154700,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Send Null Chat",
  "description": "",
  "id": "group-chat-feature;send-null-chat",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "User Login \"qa.yubi17@gmail.com\" as email \"yubi1234\" as password and direct to Paket C",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User go to Dasboard Paket C",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User see Group Chat page",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Input Null Chat",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "qa.yubi17@gmail.com",
      "offset": 12
    },
    {
      "val": "yubi1234",
      "offset": 43
    }
  ],
  "location": "CheckinsSteps.inputCreadential(String,String)"
});
formatter.result({
  "duration": 11791315500,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.verifyClickPaket()"
});
formatter.result({
  "duration": 8196114800,
  "status": "passed"
});
formatter.match({
  "location": "GroupChatSteps.verifyDasboardGroupChat()"
});
formatter.result({
  "duration": 9383948500,
  "status": "passed"
});
formatter.match({
  "location": "GroupChatSteps.NullChat()"
});
formatter.result({
  "duration": 9356371900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//img[@src\u003d\u0027https://storage.googleapis.com/staging-cicle-app/61fd1bca835d691ce6fc470d/624d9c8db4dad6e15911fbc2/d1ccfb46f88fb97df83777f60af63248/logo.png\u0027]\"}\n  (Session info: chrome\u003d100.0.4896.127)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027YUBIHARTLAND\u0027, ip: \u0027192.168.100.6\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_321\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.127, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\YUBIHA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:52581}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 14e31abeb6396fb21af1e8e938bbd8dc\n*** Element info: {Using\u003dxpath, value\u003d//img[@src\u003d\u0027https://storage.googleapis.com/staging-cicle-app/61fd1bca835d691ce6fc470d/624d9c8db4dad6e15911fbc2/d1ccfb46f88fb97df83777f60af63248/logo.png\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\r\n\tat pageObject.GroupChatPage.nullChat(GroupChatPage.java:128)\r\n\tat StepDefinitions.GroupChatSteps.NullChat(GroupChatSteps.java:76)\r\n\tat ✽.When Input Null Chat(features/ID04_GroupChat.feature:37)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1104897900,
  "status": "passed"
});
formatter.uri("features/ID05_Board.feature");
formatter.feature({
  "line": 2,
  "name": "Board Feature",
  "description": "",
  "id": "board-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.before({
  "duration": 4187648500,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Board verify to the link page",
  "description": "",
  "id": "board-feature;board-verify-to-the-link-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User Login \"qa.yubi17@gmail.com\" as email \"yubi1234\" as password and direct to Paket C",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User go to Dasboard Paket C",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User see Board Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "qa.yubi17@gmail.com",
      "offset": 12
    },
    {
      "val": "yubi1234",
      "offset": 43
    }
  ],
  "location": "CheckinsSteps.inputCreadential(String,String)"
});
formatter.result({
  "duration": 11768953000,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.verifyClickPaket()"
});
formatter.result({
  "duration": 8225219900,
  "status": "passed"
});
formatter.match({
  "location": "BoardSteps.ClikDirectToBoardPage()"
});
formatter.result({
  "duration": 5224589800,
  "status": "passed"
});
formatter.after({
  "duration": 875228700,
  "status": "passed"
});
formatter.before({
  "duration": 4116230700,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Add Card Feature",
  "description": "",
  "id": "board-feature;add-card-feature",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "User Login \"qa.yubi17@gmail.com\" as email \"yubi1234\" as password and direct to Paket C",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User go to Dasboard Paket C",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User see Board Page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User Add Card with \"HaloTest\" as name card",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "qa.yubi17@gmail.com",
      "offset": 12
    },
    {
      "val": "yubi1234",
      "offset": 43
    }
  ],
  "location": "CheckinsSteps.inputCreadential(String,String)"
});
formatter.result({
  "duration": 11702682200,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.verifyClickPaket()"
});
formatter.result({
  "duration": 8202825000,
  "status": "passed"
});
formatter.match({
  "location": "BoardSteps.ClikDirectToBoardPage()"
});
formatter.result({
  "duration": 5235404800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HaloTest",
      "offset": 20
    }
  ],
  "location": "BoardSteps.InputAddCardName(String)"
});
formatter.result({
  "duration": 2057555200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027ListContainer_ListContainer__outerList__1PG0-\u0027]/div[1]//div[@class\u003d\u0027ListContainer_ListContainer__buttonBottom__2kZAI\u0027]\"}\n  (Session info: chrome\u003d100.0.4896.127)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027YUBIHARTLAND\u0027, ip: \u0027192.168.100.6\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_321\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.127, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\YUBIHA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:52696}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 94f356655229fb78eeea2acfcbe12cd3\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027ListContainer_ListContainer__outerList__1PG0-\u0027]/div[1]//div[@class\u003d\u0027ListContainer_ListContainer__buttonBottom__2kZAI\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat pageObject.BoardPage.addCardButton(BoardPage.java:126)\r\n\tat StepDefinitions.BoardSteps.InputAddCardName(BoardSteps.java:34)\r\n\tat ✽.When User Add Card with \"HaloTest\" as name card(features/ID05_Board.feature:13)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 891972000,
  "status": "passed"
});
formatter.before({
  "duration": 4472336400,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Quick Comment Feature",
  "description": "",
  "id": "board-feature;quick-comment-feature",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "User Login \"qa.yubi17@gmail.com\" as email \"yubi1234\" as password and direct to Paket C",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User go to Dasboard Paket C",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User see Board Page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Input Quick Comment \"Test 123\" as comment",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "qa.yubi17@gmail.com",
      "offset": 12
    },
    {
      "val": "yubi1234",
      "offset": 43
    }
  ],
  "location": "CheckinsSteps.inputCreadential(String,String)"
});
formatter.result({
  "duration": 11897928100,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.verifyClickPaket()"
});
formatter.result({
  "duration": 9637010100,
  "status": "passed"
});
formatter.match({
  "location": "BoardSteps.ClikDirectToBoardPage()"
});
formatter.result({
  "duration": 5225626900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test 123",
      "offset": 21
    }
  ],
  "location": "BoardSteps.InputQuickComment(String)"
});
formatter.result({
  "duration": 2054930600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027ListContainer_ListContainer__outerList__1PG0-\u0027]//div[@class\u003d\u0027ListCard_ListDroppable__1sdGc\u0027]/div[1]//div[@id\u003d\u0027editCardMenu\u0027]\"}\n  (Session info: chrome\u003d100.0.4896.127)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027YUBIHARTLAND\u0027, ip: \u0027192.168.100.6\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_321\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.127, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\YUBIHA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:52752}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 0a697aabd101122016cd74ccbc8c0e84\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027ListContainer_ListContainer__outerList__1PG0-\u0027]//div[@class\u003d\u0027ListCard_ListDroppable__1sdGc\u0027]/div[1]//div[@id\u003d\u0027editCardMenu\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat pageObject.BoardPage.menuBoardClick(BoardPage.java:141)\r\n\tat StepDefinitions.BoardSteps.InputQuickComment(BoardSteps.java:48)\r\n\tat ✽.When Input Quick Comment \"Test 123\" as comment(features/ID05_Board.feature:19)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 886118600,
  "status": "passed"
});
formatter.before({
  "duration": 4472916700,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Add List Feature",
  "description": "",
  "id": "board-feature;add-list-feature",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "User Login \"qa.yubi17@gmail.com\" as email \"yubi1234\" as password and direct to Paket C",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User go to Dasboard Paket C",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User see Board Page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Add list Feature and input \"Feature Yubi\" as name",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "qa.yubi17@gmail.com",
      "offset": 12
    },
    {
      "val": "yubi1234",
      "offset": 43
    }
  ],
  "location": "CheckinsSteps.inputCreadential(String,String)"
});
formatter.result({
  "duration": 12426761400,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.verifyClickPaket()"
});
formatter.result({
  "duration": 8255192600,
  "status": "passed"
});
formatter.match({
  "location": "BoardSteps.ClikDirectToBoardPage()"
});
formatter.result({
  "duration": 5230653500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feature Yubi",
      "offset": 28
    }
  ],
  "location": "BoardSteps.addList(String)"
});
formatter.result({
  "duration": 2048904300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[.\u003d\u0027Add List\u0027]\"}\n  (Session info: chrome\u003d100.0.4896.127)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027YUBIHARTLAND\u0027, ip: \u0027192.168.100.6\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_321\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.127, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\YUBIHA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:52808}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 28362c100090db8e6331e5e6c0ab1ab1\n*** Element info: {Using\u003dxpath, value\u003d//a[.\u003d\u0027Add List\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat pageObject.BoardPage.clickAddListFeature(BoardPage.java:166)\r\n\tat StepDefinitions.BoardSteps.addList(BoardSteps.java:65)\r\n\tat ✽.When Add list Feature and input \"Feature Yubi\" as name(features/ID05_Board.feature:25)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 876528200,
  "status": "passed"
});
formatter.before({
  "duration": 4340847400,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Move Card Feature",
  "description": "",
  "id": "board-feature;move-card-feature",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "User Login \"qa.yubi17@gmail.com\" as email \"yubi1234\" as password and direct to Paket C",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User go to Dasboard Paket C",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User see Board Page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Move Card YUBI TEST",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "qa.yubi17@gmail.com",
      "offset": 12
    },
    {
      "val": "yubi1234",
      "offset": 43
    }
  ],
  "location": "CheckinsSteps.inputCreadential(String,String)"
});
formatter.result({
  "duration": 11642238900,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.verifyClickPaket()"
});
formatter.result({
  "duration": 8218382300,
  "status": "passed"
});
formatter.match({
  "location": "BoardSteps.ClikDirectToBoardPage()"
});
formatter.result({
  "duration": 5235517300,
  "status": "passed"
});
formatter.match({
  "location": "BoardSteps.moveCard()"
});
formatter.result({
  "duration": 2049213200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@href\u003d\u0027/cards/62512a6496738afb37354a1b\u0027]\"}\n  (Session info: chrome\u003d100.0.4896.127)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027YUBIHARTLAND\u0027, ip: \u0027192.168.100.6\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_321\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.127, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\YUBIHA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:52868}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e87ad9e044ba64f98629672b24c59ab2\n*** Element info: {Using\u003dxpath, value\u003d//a[@href\u003d\u0027/cards/62512a6496738afb37354a1b\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat pageObject.BoardPage.clickYubiCardTest(BoardPage.java:181)\r\n\tat StepDefinitions.BoardSteps.moveCard(BoardSteps.java:77)\r\n\tat ✽.When Move Card YUBI TEST(features/ID05_Board.feature:31)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 870031800,
  "status": "passed"
});
formatter.before({
  "duration": 4240024300,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Attach file in card board",
  "description": "",
  "id": "board-feature;attach-file-in-card-board",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "User Login \"qa.yubi17@gmail.com\" as email \"yubi1234\" as password and direct to Paket C",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User go to Dasboard Paket C",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User see Board Page",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Attach file in board card Yubi \"C:\\\\Users\\\\yubihartland\\\\Desktop\\\\logo.png\" as a file",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "qa.yubi17@gmail.com",
      "offset": 12
    },
    {
      "val": "yubi1234",
      "offset": 43
    }
  ],
  "location": "CheckinsSteps.inputCreadential(String,String)"
});
formatter.result({
  "duration": 11832314500,
  "status": "passed"
});
formatter.match({
  "location": "CheckinsSteps.verifyClickPaket()"
});
formatter.result({
  "duration": 8237898300,
  "status": "passed"
});
formatter.match({
  "location": "BoardSteps.ClikDirectToBoardPage()"
});
formatter.result({
  "duration": 5248162400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C:\\\\Users\\\\yubihartland\\\\Desktop\\\\logo.png",
      "offset": 32
    }
  ],
  "location": "BoardSteps.attachCardYubi(String)"
});
formatter.result({
  "duration": 2064155400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@href\u003d\u0027/cards/62512a6496738afb37354a1b\u0027]\"}\n  (Session info: chrome\u003d100.0.4896.127)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027YUBIHARTLAND\u0027, ip: \u0027192.168.100.6\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_321\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.127, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\YUBIHA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:52923}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: abb74c0e5de429d186ccd80c6f00814b\n*** Element info: {Using\u003dxpath, value\u003d//a[@href\u003d\u0027/cards/62512a6496738afb37354a1b\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat pageObject.BoardPage.clickYubiCardTest(BoardPage.java:181)\r\n\tat StepDefinitions.BoardSteps.attachCardYubi(BoardSteps.java:94)\r\n\tat ✽.When Attach file in board card Yubi \"C:\\\\Users\\\\yubihartland\\\\Desktop\\\\logo.png\" as a file(features/ID05_Board.feature:37)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 845112500,
  "status": "passed"
});
});