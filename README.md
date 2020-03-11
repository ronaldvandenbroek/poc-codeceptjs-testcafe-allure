# poc-codeceptjs-testcafe-allure
 A proof of concept testing the coupling between CodeceptJS, TestCafé and Allure.
 
 https://codecept.io/quickstart/
 https://codecept.io/testcafe/

 npm init -y
 npm install codeceptjs testcafe --save-dev
 npx codeceptjs init
    Select TestCafé as helper
    Browser to be used: firefox
    Show browser window: y
 npx codeceptjs gt
    Feature being tested: poc
 npx codeceptjs run --steps

 Add the following to the package.json test script:
  "scripts": {
    "test": "npx codeceptjs run --steps"
  },
  
 Run tests:
 npm run test

 https://codecept.io/plugins/#allure

 npm install -g allure-commandline --save-dev

 Edit the package.json test script:
 "scripts": {
    "test": "npx codeceptjs run --steps --plugins allure"
  },

 Run tests:
 npm run test

 allure serve output
