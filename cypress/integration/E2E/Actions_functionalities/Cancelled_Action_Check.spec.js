///<reference types='cypress' />

import 'cypress-xpath'
import {Actions,actionsSharedObjects} from '../../../support/PageObjects/ADMIN/Admin_Actions'


describe('Actions Page Functionality', function(){ 
    const actions = new Actions()
    const sharedObj= new actionsSharedObjects()


    beforeEach(() => {
        cy.Login_admin()
        actions.getActionsTab().click()  
    });
    it('Checking the Action Select Page Title',function(){
        actions.getFilterSelect().select('Cancelled')
        sharedObj.getSectionName().should('have.text',": Showing Cancelled actions")
    })
    
    it("Checking the Table And columns Exist or Not",function(){
        sharedObj.getTable().should('exist')
        sharedObj.getTableHeaders().should('exist')
        cy.get(" thead tr th:nth-child(1)").should('have.text','Date')
        cy.get(" thead tr th:nth-child(2)").should('have.text','User')
        cy.get(" thead tr th:nth-child(3)").should('have.text','Type')
        cy.get(" thead tr th:nth-child(4)").should('have.text','Summary')
        cy.get(" thead tr th:nth-child(5)").should('have.text','Status')
        cy.get(" thead tr th:nth-child(6)").should('have.text','View')

    })

    it('Checking Recently "Cancelled" Action and Viewing the Action', function() {
       
        actions.getFilterSelect().select('Cancelled').then(()=>{   
        if((sharedObj.getTableRows()).should('be.visible')){
            sharedObj.getFirstRow().within(()=>{
                sharedObj.getButtonColumn().click()
            })
            sharedObj.getSectionNameButton().should('have.text','Cancelled')
            sharedObj.getCloseButton().click()
        }
        else{
            console.log('No Item in the Pending Table ')
        }
        })
    })

    it('Checking the Next/Previous Page Buttons',function(){
        actions.getFilterSelect().select('Cancelled')
        sharedObj.getNextPageButton().should('be.visible')
        sharedObj.getPreviousPageButton().should('be.visible')
    })

})