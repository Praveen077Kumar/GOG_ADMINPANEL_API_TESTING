///<reference types='cypress' />
import {Media} from '../../../support/PageObjects/ADMIN/admin_media'
describe('Media Admin Functionality', function(){
    const mediasection = new Media()
    
    beforeEach(()=>{
        cy.Login_admin()
        mediasection.get_media().click()
    })

    it('Media Utility check Add media and attach the object file ', function() {
        
      
        mediasection.getaddmedia().click()
        mediasection.getinputfile().attachFile('robo.jpg')
        // mediasection.getuploadbutton().click()
    });

    it('Assert the Section Name if it is Availble ', () => {
        mediasection.getSectionName().should("have.text","Settings: Media")
        mediasection.getSectionName().should('be.visible')
    });

    it('Assert the Add button if it is visible and enabled', () => {
        mediasection.getAddFileButton().should('be.visible')
        mediasection.getAddFileButtonText().should('have.text','Add Files')
    });

    it("Asserting the Card's Byte size visible on the each cards ", () => {
        mediasection.getCardByteSize().each(($elt)=>{
            
            cy.get($elt).should('be.visible')
        })
    });

    it('Asserting the Copy-link Button  on the Card visible correctly or not!', () => {
        mediasection.getCardcopyLinkbutton().each(($elt)=>{
            cy.get($elt).should('be.visible')
        })
    });



})