///<reference types='cypress' />
import { expect } from 'chai';
import 'cypress-xpath'
import {datesselect,Primarysales}  from '../../../support/PageObjects/ADMIN/publish_reports.js'

const  commisionReport = new datesselect()
const  CommisionPage= new Primarysales()

describe('Primary sales Allocated Order report', () => {
    beforeEach(function() {
        cy.Login_admin()
        cy.task('remove_folder')
    });
    it('should display the correct Fields and Text of the Partner-Commission Page',()=>{
        commisionReport.getreportmenubutton().should('be.visible').click()
        CommisionPage.getReportSectionName().should('be.visible').should('have.text','Primary Sales Report')
        CommisionPage.getReportTypecolumn().should('be.visible').should('have.text','Report Type')
        CommisionPage.getdownloadButton().should('be.enabled').should('be.visible').should('have.text','Download Report')
      

    })

    it(' Generating the Allocate Order Report ', function() {
        // var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
        commisionReport.getreportmenubutton().should('be.visible').click()
        commisionReport.getreporttype().should('be.visible').select('Partner Commission')

        commisionReport.getreportbutton().click()
        cy.wait(4000).then(()=>{
            cy.task('files').then(function(filename){
                const  file_data = filename
               cy.task('csvlength', 'cypress/downloads/'+file_data).then(length =>
               {
                cy.log('your file have No. of Transaction ',length)
                }).then(()=>{
                    cy.task('remove_folder')
                })
           })  
        })   
    })
    it.only('Varifing the CSV has the same data headers as mentioned.. ', () => {
        let mydata=['conversion_id','order_id','customer_id','amount']
        
        commisionReport.getreportmenubutton().should('be.visible').click()
        commisionReport.getreporttype().should('be.visible').select('Partner Commission')

        commisionReport.getreportbutton().should('be.visible').click()
        cy.wait(2000).then(() => {
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
        }).then(()=>{
            cy.task('remove_file')
       
        })
    });
});