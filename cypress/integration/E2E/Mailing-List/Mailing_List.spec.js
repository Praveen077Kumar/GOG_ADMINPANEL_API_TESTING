///<reference types='cypress' />

const { assert } = require('chai');
const {mailing} = require('../../../support/PageObjects/ADMIN/Mailing_list')
const mail= new mailing()
describe("Mailing List Funtionality",function(){

    beforeEach(function(){
        cy.Login_admin() 
        mail.getmailSection().click()
        mail.getovervalue().invoke("text").as('text1')
        mail.getlocationvalue().invoke("text").as('text2')
        mail.getpercentagevalue().invoke("text").as('text3')
        cy.wait(3000)    
    });
    it('Testing the MailingList Functionality and Assert the Calculations of the Members shown in Box ',function(){
    
        mail.getassertTitle().should('have.text','Mailing List Summary')
        mail.getTotalCountTable().should('be.visible')
        mail.getDetailTable().should('be.visible')

        if( mail.getTotalMemberOverallRow().should('exist')){

            mail.getTotalCountTable().within(()=>{

                mail.getvalueofOverallMemeber().each(($el)=>{
                     const element= $el.text()
                     cy.log(element)
                     if(element >20000){
                         cy.log('OverAll Member Are Showing Correctly')
                     }
                    
                 })
             })
        }
        else{
            console.error('Columns Are not in the table ');
        }


        if(mail.getTotalMemberwithlocation().should('exist')){

            mail.getTotalCountTable().within(()=>{

                mail.getvalueOfMemberWithLocation().each(($el)=>{
                     const element= $el.text()
                     if(element >10000){
                         cy.log('The Members With Location Showing Correctly')
                     }
                    
                 })
             })
        }
        else{
            console.error('Column is not in the table');
            cy.log('Columns are not in the table')
        }

        if( mail.getPercentage_Memeber_without_location().should('exist')){

            mail.getTotalCountTable().within(()=>{

                mail.getvalueofMember_Without_location().should('be.visible')
        
            })
            cy.log("The Members Without Location Showing Correctly ")
        }
        else{
            console.error('Column is not in the Table');
            cy.log('This Column in not in the table')
        }
    })



    it("ASSERT THE COLUMNS DISPLAYED OR NOT! DETAILED TABLE, AND THE COLUMNS OF THE MEMBER's TABLE SHOWING OR NOT!",function(){
        if( mail.getColumnsOfDataTable().should('exist')){

            mail.getColumnsOfDataTable().within(()=>{

                mail.getdetailedcolumn1().each(($elt)=>{
                    const column1= $elt.text()
                    if(column1 === 'Country'){
                        cy.log('The Country Column Showing Correctly in Table')
                    }
                    else{
                        console.error('This Column in not in the table');
                        cy.log('This Column in not in the table')
                    }
                })
            })
        }
        else{
            console.error('Table is Not available');
        }


        if( mail.getColumnsOfDataTable().should('exist')){

            mail.getColumnsOfDataTable().within(()=>{

                mail.getdetailedcolumn2().each(($elt)=>{
                    const column2= $elt.text()
                    if(column2 === 'Subscribers'){
                        cy.log('The Subscribers Column Showing in the Table Correctly')
                    }
                    else{
                        console.error('This Column in not in the table');
                        cy.log('This Column in not in the table')
                    }
                })
            })
        }
        else{
            console.error('Table is Not available');
        }

        if( mail.getColumnsOfDataTable().should('exist')){

            mail.getColumnsOfDataTable().within(()=>{

                mail.getdetailedcolumn3().each(($elt)=>{
                    const column3= $elt.text()
                    if(column3 === ' By Location'){
                        cy.log('The Location Column Showing in the Table Correctly')
                    }
                    else{
                        console.error('This Column in not in the table');
                        cy.log('This Column in not in the table')
                    }
                })
            })
        }
        else{
            console.error('Table is Not available');
            cy.log('Table is Not available');
        }

        if( mail.getColumnsOfDataTable().should('exist')){

            mail.getColumnsOfDataTable().within(()=>{

                mail.getdetailedcolumn4().each(($elt)=>{
                    const column4= $elt.text()
                    if(column4 === ' Overall'){
                            cy.log('The OverAll Column Is Showing In the Table Correctly')
                    }
                    else{
                        console.error('This Column in not in the table');
                        cy.log('This Column in not in the table')
                    }
                })
            })
        }
        else {
            console.error('Table is Not available');
            cy.log('Table is Not available');
        }
    })



    it("Asserting the Result table and justify the results showing correct Numeric value in table  ",function(){
        const data1 = parseInt(this.text1)
        const data2 = parseInt(this.text2)
        const data3 = parseFloat(this.text3)
        const subvalue = data1 - data2
        const percentage= subvalue/data1 *100
        const percentage_slice= parseFloat(percentage.toFixed(2))
        assert.deepEqual(data3,percentage_slice,'the result of percentage shown is correct ')
        cy.log('Here is the %percentage of Members without Location.',percentage_slice)
        
    })
})