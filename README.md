# browser-restart-bug

Reproduction of a bug I see in my protractor tests.

```
$ npm test

1) Test Go to angular-tutorial
  Message:
    Failed: This driver instance does not have a valid session ID (did you call WebDriver.quit()?) and may no longer be used.
  Stack:
    NoSuchSessionError: This driver instance does not have a valid session ID (did you call WebDriver.quit()?) and may no longer be used.
        at WebDriverError (/Users/romario/src/propel-smoke-test/node_modules/selenium-webdriver/lib/error.js:27:5)
        at NoSuchSessionError (/Users/romario/src/propel-smoke-test/node_modules/selenium-webdriver/lib/error.js:170:5)
        at checkHasNotQuit (/Users/romario/src/propel-smoke-test/node_modules/selenium-webdriver/lib/webdriver.js:395:15)
        at Driver.schedule (/Users/romario/src/propel-smoke-test/node_modules/selenium-webdriver/lib/webdriver.js:356:5)
        at Navigation.to (/Users/romario/src/propel-smoke-test/node_modules/selenium-webdriver/lib/webdriver.js:1027:25)
        at Driver.get (/Users/romario/src/propel-smoke-test/node_modules/selenium-webdriver/lib/webdriver.js:795:28)
        at ProtractorBrowser.get (/Users/romario/src/propel-smoke-test/node_modules/protractor/built/browser.js:482:21)
        at Object.it (/Users/romario/src/propel-smoke-test/build/provider-smoke-spec.js:11:30)
        at /Users/romario/src/propel-smoke-test/node_modules/jasminewd2/index.js:94:23
        at new ManagedPromise (/Users/romario/src/propel-smoke-test/node_modules/selenium-webdriver/lib/promise.js:1082:7)
    From: Task: Run it("Go to angular-tutorial") in control flow
        at Object.<anonymous> (/Users/romario/src/propel-smoke-test/node_modules/jasminewd2/index.js:79:14)
    From asynchronous test:
    Error
        at Suite.describe (/Users/romario/src/propel-smoke-test/build/provider-smoke-spec.js:10:5)
        at Object.<anonymous> (/Users/romario/src/propel-smoke-test/build/provider-smoke-spec.js:3:1)
        at Module._compile (module.js:556:32)
        at Object.Module._extensions..js (module.js:565:10)
        at Module.load (module.js:473:32)
        at tryModuleLoad (module.js:432:12)

```

