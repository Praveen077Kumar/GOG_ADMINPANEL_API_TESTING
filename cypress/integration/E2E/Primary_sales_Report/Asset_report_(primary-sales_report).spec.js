///<reference types='cypress'/>
import 'cypress-xpath'
import {datesselect}  from '../../../support/PageObjects/ADMIN/publish_reports.js'

var assetReport = new datesselect()


describe('Primary sales Asset report', () => {
    beforeEach (function(){
        cy.fixture('Primary_sales_report.json').then(function (data1){
            this.data1 = data1
        })
        cy.task('remove_folder')

    })
    beforeEach(function() {
        cy.Login_admin()
    });
    it('Generating the Asset Report And Varifing the Columns of the File Showing Correctly.', function(){
        assetReport.getreportmenubutton().click()
        assetReport.getassetReport().select(this.data1.reportType1)
        assetReport.getdatepicker1().click()
        assetReport.getcalender1()
        assetReport.getcalender1().should('be.visible')
        cy.selectreportMonth(this.data1.monthstart)
        cy.selectreportDay(this.data1.datestart)
        assetReport.getdatepicker2().click()
        assetReport.getcalender1()
        assetReport.getcalender1().should('be.visible')
        cy.selectreportMonth(this.data1.monthfinish)
        cy.selectreportDay(this.data1.datefinish)
        assetReport.getreportbutton().click()
        cy.wait(2000)

        cy.task('files').then(function(filename){
            let mydata=['transactionHash','owner','assetType','chroma','createdAt','mintedAt','price']
            let file_data = filename
            cy.log(file_data)
            cy.task('csvlength', 'cypress/downloads/' +file_data).then(length=>
            {cy.log('your file have No. of Transaction ',length)})   
            cy.task('headerscsv').then((data)=>{

                 
                if(data === null){
                    cy.log('No Headers in the File!')
                }
                else{
                const csvheaders= data.toLocaleString()
                expect(csvheaders).to.deep.equals(mydata.toLocaleString());
                cy.log('Here is the Headers of CSV \n',csvheaders)
                cy.log('The CSV Headers Are Showing Correctly')
                }
            })
            cy.wait(3000)
            cy.task('remove_folder')
        })
    })

})