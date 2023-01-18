///<reference types='cypress' />

const landingPage = require("../../../support/PageObjects/ADMIN/admin_product.js");

describe('Checking the Landing Page of Product Section', () => {
   beforeEach(()=>{
        cy.Login_admin()
        landingPage.getProductclick().click({force:true})
   })
    it('Asserting the Section page  Visible or not! ', () => {
        
        landingPage.getSectionName().should('be.visible')
        landingPage.getSectionName().should('have.text','Products')
    });

    it('Asserting the Table of Product page and varify if visible! ', () => {
        landingPage.getTable().should('be.visible')
        landingPage.getTableBody().should('be.visible')
    });

    it('Asserting the Columns of the table if it visible',()=>{
        landingPage.getTableHeader().should('be.visible')
        landingPage.getTableHeadersName().each(($elt)=>{
            cy.get($elt).should('be.visible')
        })
    })

});