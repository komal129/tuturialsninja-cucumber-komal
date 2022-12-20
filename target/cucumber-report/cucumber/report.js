$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("desktop.feature");
formatter.feature({
  "line": 2,
  "name": "Desktop Test",
  "description": "As a user I should navigate to Desktop page successfully",
  "id": "desktop-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 8443163200,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "I will verify products are arranged in Alphabetical order",
  "description": "",
  "id": "desktop-test;i-will-verify-products-are-arranged-in-alphabetical-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am in Desktops page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mousehover to desktop and click",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I select menu \"Show All Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify products are arranged in Alphabetical order",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopPageSteps.iAmInDesktopsPage()"
});
formatter.result({
  "duration": 356467600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iMousehoverToDesktopAndClick()"
});
formatter.result({
  "duration": 172280500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All Desktops",
      "offset": 15
    }
  ],
  "location": "HomePageSteps.iSelectMenu(String)"
});
formatter.result({
  "duration": 20056503700,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iVerifyProductsAreArrangedInAlphabeticalOrder()"
});
formatter.result({
  "duration": 20188733400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#input\\-sort\"}\n  (Session info: chrome\u003d108.0.5359.125)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [19d1693d4259dc4586c5f773ae73699b, findElement {using\u003did, value\u003dinput-sort}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\Komal\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57008}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:57008/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 19d1693d4259dc4586c5f773ae73699b\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat com.tutorialsninja.utility.Utility.selectByVisibleTextFromDropDown(Utility.java:163)\r\n\tat com.tutorialsninja.pages.DesktopPage.arrangeProductInDescendingOrder(DesktopPage.java:54)\r\n\tat com.tutorialsninja.cucumber.steps.DesktopPageSteps.iVerifyProductsAreArrangedInAlphabeticalOrder(DesktopPageSteps.java:25)\r\n\tat ✽.Then I verify products are arranged in Alphabetical order(desktop.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 784008300,
  "status": "passed"
});
formatter.uri("homepage.feature");
formatter.feature({
  "line": 2,
  "name": "Homepage Test",
  "description": "As a user I want to navigate to Desktop page successfully",
  "id": "homepage-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 3319598900,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should navigate to desktops page successfully",
  "description": "",
  "id": "homepage-test;user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mousehover to desktop and click",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I select menu \"Show All Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify \"Desktops\" text",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 50000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iMousehoverToDesktopAndClick()"
});
formatter.result({
  "duration": 504279100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All Desktops",
      "offset": 15
    }
  ],
  "location": "HomePageSteps.iSelectMenu(String)"
});
formatter.result({
  "duration": 904901300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 8
    }
  ],
  "location": "HomePageSteps.verifyText(String)"
});
formatter.result({
  "duration": 66277800,
  "status": "passed"
});
formatter.after({
  "duration": 71500,
  "status": "passed"
});
formatter.uri("laptopsandnotebooks.feature");
formatter.feature({
  "line": 2,
  "name": "Laptops And Notebooks Test",
  "description": "As a user I should navigate to Laptops And Notebooks page successfully",
  "id": "laptops-and-notebooks-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 3371351600,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "I will verify products are displayed in high to low order",
  "description": "",
  "id": "laptops-and-notebooks-test;i-will-verify-products-are-displayed-in-high-to-low-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover to LaptopsAndNotebooks tab and click",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I select menu \"Show All Laptops \u0026 Notebooks\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify product are arranged in high to low order",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 59200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iMouseHoverToLaptopsAndNotebooksTabAndClick()"
});
formatter.result({
  "duration": 576974800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All Laptops \u0026 Notebooks",
      "offset": 15
    }
  ],
  "location": "HomePageSteps.iSelectMenu(String)"
});
formatter.result({
  "duration": 700377700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.verifyProductAreArrangedInHighToLowOrder()"
});
formatter.result({
  "duration": 906617200,
  "status": "passed"
});
formatter.after({
  "duration": 28400,
  "status": "passed"
});
formatter.uri("myaccountstest.feature");
formatter.feature({
  "line": 2,
  "name": "MyAccounts Test",
  "description": "As a user I want to test my accounts test",
  "id": "myaccounts-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 3171196000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "myaccounts-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on \"My Account\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I select \"Login\" menu",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Verify \"Returning Customer\" text is displayed on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 38700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Account",
      "offset": 12
    }
  ],
  "location": "MyAccountsPageSteps.iClickOnTab(String)"
});
formatter.result({
  "duration": 86489200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 10
    }
  ],
  "location": "MyAccountsPageSteps.iSelectMenu(String)"
});
formatter.result({
  "duration": 351030000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Returning Customer",
      "offset": 8
    }
  ],
  "location": "MyAccountsPageSteps.verifyTextIsDisplayedOnLoginPage(String)"
});
formatter.result({
  "duration": 64893400,
  "status": "passed"
});
formatter.after({
  "duration": 29100,
  "status": "passed"
});
});