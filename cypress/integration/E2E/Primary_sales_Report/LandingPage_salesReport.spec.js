///<reference types='cypress' />

import {Primarysales} from '../../../support/PageObjects/ADMIN/publish_reports'

describe('Asserting and varifing the Primary sales report Landing Page', () => {
    const primaryreport = new Primarysales()
    beforeEach(()=>{
        cy.Login_admin()    
        primaryreport.getIntoReportSection().click({force:true})

    })
    it('Assert the Section Name if it is available', () => {
        primaryreport.getSectionName().should('be.visible')
        primaryreport.getSectionName().should('have.text','Primary Sales Report') 
    });

    it('Varifing the Text of the Input Fields shown in the DOM', () => {
        primaryreport.getreportTypeText().should('be.visible')
        primaryreport.getreportTypeText().should('have.text','Report Type')
        primaryreport.getdropName().should('be.visible')
        primaryreport.getdropName().should('have.text','Drop*')
        primaryreport.getStartDate().should('be.visible')
        primaryreport.getStartDate().should('have.text','Start date*')
        primaryreport.getFinishDate().should('be.visible')
        primaryreport.getFinishDate().should('have.text','Finish date*')
    });

    it('Report download Button must be visible and enable if available !', () => {
        primaryreport.getdownloadButton().should('be.visible')
        primaryreport.getdownloadButton().should('have.text','Download Report')
        primaryreport.getdownloadButton().should('be.enabled')
    });
});