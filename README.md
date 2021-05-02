# cypress
Cypress - automation

# Installation & project setup  
- Install Nodejs  
    * Verify installed version by running node --version  
- Create folder for cypress project   
- Run **npm --init** - this creates package.json file  
- Install cypress by running **npm install cypress --save-dev** - this creates the basic cypress folders  
- Run **node_modules/.bin/cypress open**   
- Install other required plugins and verify its updated in package.json file  
    * Example : to support accessing elements by xpath  
    * run **npm install -D cypress-xpath**    
- To create html report  
    * Run **npm i --D mocha mochawesome mochawesome-merge mochawesome-report-generator**  
    * Dependencies will be updated in package.json file and looks like 	
    ```"devDependencies": {
        "cypress": "^7.2.0",
       "cypress-xpath": "^1.6.2",
       "mocha": "^8.3.2",
       "mochawesome": "^6.2.2",
       "mochawesome-merge": "^4.2.0",
       "mochawesome-report-generator": "^5.2.0"
       },
     ```

# Test case creation and execution
- Create test cases with .js in integration folder. Incase of typescript,files should be with .ts
- Update scripts object in package.json file to run tests in cli
```"scripts": {
   "testrun": "cypress open",
   "delete:reportFolder": "rm -rf mochawesome-report/",
   "test:cli": "npm run delete:reportFolder && cypress run",
   "merge:reports": "mochawesome-merge mochawesome-report/*.json > cypress-combined-report.json",
   "create:html:report": "npm run merge:reports && marge --reportDir TestReport cypress-combined-report.json"
 },
 ```
Before every run, mochawesome-report/ contents are deleted to update the report with latest one. For each test file .json file is created and then all are merged to create one .json file.Atlast, html is created from the merged .json file.

# Execute tests 
- In testrunner
  * Run npx cypress open
  * This opens testrunner, run the required files
- Headless
  * To run tests -  **npm run test:cli** 
  * To create html report - **npm run create:html:report**
