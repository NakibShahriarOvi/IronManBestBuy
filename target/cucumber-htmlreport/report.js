$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BestBuyMenuDropDown.feature");
formatter.feature({
  "line": 2,
  "name": "BestBuy Automation",
  "description": "",
  "id": "bestbuy-automation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 5768553500,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Menu DropDown",
  "description": "",
  "id": "bestbuy-automation;menu-dropdown",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open BestBuy page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on Menu",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on Deals",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on Top Deals",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should be able to click on Featured Deals",
  "keyword": "Then "
});
formatter.match({
  "location": "BestBuyHomePageSteps.open_BestBuy_page()"
});
formatter.result({
  "duration": 99926100,
  "status": "passed"
});
formatter.match({
  "location": "BestBuyHomePageSteps.click_on_Menu()"
});
formatter.result({
  "duration": 131935100,
  "status": "passed"
});
formatter.match({
  "location": "BestBuyHomePageSteps.click_on_Deals()"
});
formatter.result({
  "duration": 131455000,
  "status": "passed"
});
formatter.match({
  "location": "BestBuyHomePageSteps.click_on_Top_Deals()"
});
formatter.result({
  "duration": 3233984500,
  "status": "passed"
});
formatter.match({
  "location": "BestBuyResultPageSteps.user_should_be_able_to_click_on_Featured_Deals()"
});
formatter.result({
  "duration": 2133711400,
  "status": "passed"
});
formatter.after({
  "duration": 824731100,
  "status": "passed"
});
formatter.uri("BestBuyPetStoreApiTesting.feature");
formatter.feature({
  "line": 2,
  "name": "Petstore API Testing",
  "description": "",
  "id": "petstore-api-testing",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@api"
    }
  ]
});
formatter.before({
  "duration": 5158426900,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Pet CRUD API",
  "description": "",
  "id": "petstore-api-testing;pet-crud-api",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Create pet",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Get pet",
  "keyword": "Then "
});
formatter.match({
  "location": "PetStoreRestAssuredSteps.create_pet()"
});
formatter.result({
  "duration": 38000,
  "status": "passed"
});
formatter.match({
  "location": "PetStoreRestAssuredSteps.get_pet()"
});
formatter.result({
  "duration": 12300,
  "status": "passed"
});
formatter.after({
  "duration": 760096100,
  "status": "passed"
});
formatter.uri("BestBuyShopNow.feature");
formatter.feature({
  "line": 2,
  "name": "BestBuy Automation",
  "description": "",
  "id": "bestbuy-automation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 4902860700,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Menu DropDown",
  "description": "",
  "id": "bestbuy-automation;menu-dropdown",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open BestBuy page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on Shop Now",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be able to click on Exclusive Member Deals",
  "keyword": "Then "
});
formatter.match({
  "location": "BestBuyHomePageSteps.open_BestBuy_page()"
});
formatter.result({
  "duration": 138500,
  "status": "passed"
});
formatter.match({
  "location": "BestBuyHomePageSteps.click_on_Shop_Now()"
});
formatter.result({
  "duration": 10027717900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@id\u003d\u0027widget-32b09cfe-ccac-4de4-9822-38f4337709ac\u0027]//a[1]\"}\n  (Session info: chrome\u003d122.0.6261.95)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027DESKTOP-NH9B7CI\u0027, ip: \u0027192.168.1.76\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 122.0.6261.95, chrome: {chromedriverVersion: 122.0.6261.94 (880dbf29479c..., userDataDir: C:\\Users\\conta\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:51489}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 79cccb6e3f268143bd63b15c048247e3\n*** Element info: {Using\u003dxpath, value\u003d//div[@id\u003d\u0027widget-32b09cfe-ccac-4de4-9822-38f4337709ac\u0027]//a[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:419)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat bestbuy.pageAction.BestBuyHomePageActions.selectShopNow(BestBuyHomePageActions.java:27)\r\n\tat bestbuy.stepDef.BestBuyHomePageSteps.click_on_Shop_Now(BestBuyHomePageSteps.java:30)\r\n\tat ✽.When Click on Shop Now(BestBuyShopNow.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BestBuyResultPageSteps.user_should_be_able_to_click_on_Exclusive_Member_Deals()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1062089300,
  "status": "passed"
});
});