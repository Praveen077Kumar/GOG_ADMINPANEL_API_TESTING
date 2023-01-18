# Cypress Automation 💻 📕 

A complete GOG UI Admin-Panel Test Automation using the cypress and javascript, mocha and chai.


## Website 🏚️
    https://admin-gog-staging.vercel.app/ 

## Integration tests 🧪🧪🧑‍💻

A Set of Admin Panel e2e UI tests, which includes most of the functionality of Admin Panel  Intractions to user in realTime. 
These Tests are are in single components accross a POM (page object model) format.
these can be structured as fixtures, data tests, attributes checks, SEO and Accessibility tests. 

## Technologies 👨‍🔧 🔨 🏗️

## javascript

 In this project, we Used the javascript to write the tests for the tests that fullfills the requirements.
 [javascript] JavaScript is the world's most popular programming language.[https://www.javascript.com/] JavaScript is the programming language of the Web. JavaScript is easy to learn.

 ## Cypress
[cypress](https://docs.cypress.io/guides/getting-started/installing-cypress) is a tool for  JavaScript testing automation solution used for web automation. It enables teams to create web test automation scripts.

## Architecture
Folder and File structure

```
📁 cypressProject
|  📁cypress
|    |📁downloads 🔽
|    |📁fixtures 🤹
|    |📁integration 🧑‍💻
|    |  📁Admin_Panel 🧍‍♂️
|    |     |📁Actions_functionality 🧑‍🏭
|    |     |📁Asset-Types 👨‍🔬
|    |     |    |📁 Asset_type_create
|    |     |    |📁Asset_type_Gifting
|    |     |📁Create-New-Drop-Sale 💧
|    |     |📁Mailing-list 📫
|    |     |📁Media 📷
|    |     |📁PartnerDropSales 👫
|    |     |📁Primary_sales_report 🧾
|    |     |📁Products ✅
|    |     |    |📁 Product-Gifting
|    |     |Base_page.spec.js
|    |     |Login_admin.spec.js
|    |     |LogOut_admin.specs.js
|    📁Plugins 🔌
|    📁screenshots 📸
|    📁support 🧑‍🦱 🤲     <PageObjects, Utilities>
|    Cypress.env.json ℹ️ <Environment Variables>
|    Cypress.json 🥇 🕵️‍♀️  < Cypress config File>
|    README.md 📖 🖐️   
```
## Pre-Requisites 👣
     Node.js > 16.x.x
     Cypress < v10 (recommended version: 9.7)
 
## install dependencies ⬇️ 🔽
     npm install 

## Commits and PR's 📃
[Github](https://github.com/)


## Running Tests 🏃 🏃‍♂️

### HOST =>  https://admin-gog-staging.vercel.app/   🏃 🏃 🏃

##### Headeless Mode
    CYPRESS_host=[HOST URL] npm run cy:run  
##### FOR Windoow Platform
    use => npm run cy:run -- --env [host]='url'
##### Headed Mode
    CYPRESS_host=[HOST URL] npm run cy:headed
##### open Cypress Test Dashboard
    CYPRESS_host=[HOST URL] npm run cy:open
#### note: make sure you pass the value of Config variable 'Cypress_baseUrl,that is HOST URl of the webpage' 



## Github Actions Setup 🚧 👮


##### step 1: ->
        clone the "CypressTest.yaml" file from the <.Github Folder>
##### step 2: -> 
        in the env: section of the file set all the following variables as it is in "<github-project/-secrets variables>" and give the values of the variables.
    
##### variables are:
```
    CYPRESS_USERNAME,           ==> Admin_Panel username
    CYPRESS_PASSWORD,           ==> Admin_Panel Password
    RECORD_KEY,                 ==> Cypress Dashboard Key
    PROJECT_ID,                 ==> Cypress Project ID
    GITTOKEN,                   ==> Github PAT TOKEN
    CYPRESS_CLIENTID,           ==> GCP Auth_Client_ID
    CYPRESS_CLIENT_SECRET,      ==> GCP Auth_Client_Secret
    CYPRESS_REFRESH_TOKEN,      ==> GCP Auth_Refresh_Token
```
##### Note: 🖊️ 🖊️
    all the variables declaration are case Sensitive 
    as mentioned in the Readme.md file.



## Running Tests Locally 🏠

Add the "<Cypress.env.json file>"  into your cypress folder and put all the vairables and their values in this file. 

##### Variables in this json file:📁
    
    "HOST":"",
    "username":"",
    "password":"",
    "RECORD_KEY":"",
    "clientId":"",
    "clientSecret":"",
    "refreshToken":""
    
##### Note: 🖊️ 🖊️
    all the variables declaration are case Sensitive 
    as mentioned in the Readme file.



## Contributions ➕ 🚮

```
you can just write your own tests inside the 
    <integration folder>.
and you can make pageObjects file inside the <support_folder/PageObjects/Admin_Panel>

```

## Cypress-Dashboard 📺 📺

##### step:1 - 
        Create the Organizations in the cypress Test Window's Runs Section:
        then select the Organizations for the Project.

##### Step 2 - 
        Go to the Runs section of the Cypress test Window and click the login button.

![Alt text](docs/Login.png 'Dashboard Login Page')

##### step 3 - 
        Create the Project After Selecting the Organization
![Alt text](docs/ProjectSetup.png 'Project Setup Page')

##### Step 4 - 
        Now you have the ProjectId and RecordKey in the Next Tab.
![Alt text](docs/projectID_RecordKey.png 'Credentials of the Deshboard service')




## :thanks For Reading ME 🛑 ✋

