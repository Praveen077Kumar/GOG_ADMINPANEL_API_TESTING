/// <reference types="cypress" />

const csvToJson = require('convert-csv-to-json')
const fsExtra = require('fs-extra')
const fs = require("fs");
const papaparse= require("papaparse");


/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

module.exports = (on,config) => {
  on('task', {

    files(){
      const file=fs.readdirSync("cypress/downloads",{encoding: "utf8"})
      return file
      },
    csvlength(path_data){
      const json = csvToJson.getJsonFromCsv(path_data)
      console.log('Number of records: ',json.length)
      return json
    },
      remove_folder(){
        fsExtra.emptyDirSync('cypress/downloads')
        return null
    },
    headerscsv(){
      return new Promise((resolve) => {
      let results=[]
      const fileset=fs.readdirSync("cypress/downloads",{encoding: "utf8"})
     
      const csvFile = fs.readFileSync('cypress/downloads/'+fileset, "utf8");
      const csvResults = papaparse.parse(csvFile, {
        header: false,
        complete: csvData => csvData.data
      }).data[0];
      if(csvResults == null){
        resolve(null)
      }
      else{
            results = csvResults
            resolve(results)
      }
  
    })
   
    },
    remove_file(){
      fsExtra.emptyDirSync('cypress/downloads')
      return null
  }
  })
  }


