# poc-codeceptjs-testcafe-allure
 A proof of concept testing the coupling between CodeceptJS, TestCafé and Allure.
 
 ## Setup
 ### CodeceptJS with TestCafé helper 
 [Quickstart](https://codecept.io/quickstart/) - [TestCafé tutorial]( https://codecept.io/testcafe/)
 
 Install CodeceptJS and TestCafé: 
 
 `npm install codeceptjs testcafe --save-dev`
 
 Initialize CodeceptJS, all options were kept default except of those listed below:
 
 `npx codeceptjs init
    Select TestCafé as helper
    Browser to be used: firefox`
 
 Generate a test:
 
 `npx codeceptjs gt
    Feature being tested: poc`
 
 Run the tests:
 
 `npx codeceptjs run --steps`

 #### Optional
 Add the following to the package.json test script:
 
  ```
  "scripts": {
    "test": "npx codeceptjs run --steps"
  }
  ```
  
 Run the tests:
 
 `npm run test`

### Adding the Allure plugin
[Allure tutorial](https://codecept.io/plugins/#allure)
 
 Install the Allure commandline used to generate and serve the report (currently only works when installed globally):
 
 `npm install -g allure-commandline --save-dev`
 
 Run the tests:
 
 `npx codeceptjs run --steps --plugins allure`
 
 Serve the Allure report:
 
 `allure serve output`

#### Optional
 Edit the package.json test script:
 
 ```
 "scripts": {
    "test": "npx codeceptjs run --steps --plugins allure && allure serve output"
  } 
  ```
  
 Run tests:
 
 `npm run test`
