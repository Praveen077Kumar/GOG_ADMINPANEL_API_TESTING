///<reference types='cypress' />

import 'cypress-xpath'
import {Actions,actionsSharedObjects} from '../../../support/PageObjects/ADMIN/Admin_Actions'


describe('Actions Page Functionality', function(){ 
    const actions= new Actions()
    const sharedObj= new actionsSharedObjects()
    beforeEach(() => {
        cy.Login_admin()
        actions.getActionsTab().click()  
    });
    it('Checking the Action Select Page Title',function(){
        
        actions.getFilterSelect().select('Pending')
        sharedObj.getSectionName().should('have.text',": Showing Pending actions")

    })
})

