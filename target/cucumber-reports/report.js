$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Login.feature");
formatter.feature({
  "name": "Test login functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Check login successful with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Browser is open",
  "keyword": "Given "
});
formatter.step({
  "name": "User is in loginpage",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User click on submit button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "mngr563276",
        "nevujAr"
      ]
    },
    {
      "cells": [
        "name2",
        "34768"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check login successful with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "Browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "com.Cucumb.InternetBank.StepDefinations.LoginSteps.browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is in loginpage",
  "keyword": "And "
});
formatter.match({
  "location": "com.Cucumb.InternetBank.StepDefinations.LoginSteps.user_is_in_loginpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"mngr563276\" and \"nevujAr\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.Cucumb.InternetBank.StepDefinations.LoginSteps.user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Cucumb.InternetBank.StepDefinations.LoginSteps.user_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check login successful with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "Browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "com.Cucumb.InternetBank.StepDefinations.LoginSteps.browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is in loginpage",
  "keyword": "And "
});
formatter.match({
  "location": "com.Cucumb.InternetBank.StepDefinations.LoginSteps.user_is_in_loginpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"name2\" and \"34768\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.Cucumb.InternetBank.StepDefinations.LoginSteps.user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Cucumb.InternetBank.StepDefinations.LoginSteps.user_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
});