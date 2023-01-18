///<reference types='cypress' />
import 'cypress-xpath'
import {datesselect}  from '../../../support/PageObjects/ADMIN/publish_reports.js'

var allocatedOrder = new datesselect()


describe('Primary sales Allocated Order report', () => {
    beforeEach (function(){
        cy.fixture('Primary_sales_report.json').then(function (data){
            this.data1 = data
        })
        cy.task('remove_folder')
    })
    beforeEach(function() {
        cy.Login_admin()
    });
    

    it(' Generating the Allocate Order Report ', function() {
        // var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
        allocatedOrder.getreportmenubutton().click()
        allocatedOrder.getreporttype().select(this.data1.reportType)
        allocatedOrder.getallocatedOrderDrop().select(this.data1.selectDrop)
        allocatedOrder.getdatepicker1().click()
        allocatedOrder.getcalender1()
        allocatedOrder.getcalender1().should('be.visible')
        cy.selectreportMonth(this.data1.monthstart)
        cy.selectreportDay(this.data1.datestart)
        allocatedOrder.getdatepicker2().click()
        allocatedOrder.getcalender1()
        allocatedOrder.getcalender1().should('be.visible')
        cy.selectreportMonth(this.data1.monthfinish)
        cy.selectreportDay(this.data1.datefinish)
        allocatedOrder.getreportbutton().click()
        cy.wait(4000).then(()=>{
            cy.task('files').then(function(filename){
                let mydata=['transactionHash','owner','createdAt','ethSum','usdSum']
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
});