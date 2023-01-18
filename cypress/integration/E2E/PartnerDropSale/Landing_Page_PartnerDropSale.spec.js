///<reference types='cypress' />
const {ProductDrop}= require("../../../support/PageObjects/ADMIN/Admin_PartnerDropSales")

describe('Asserting the Landing Page of the PartnerDropSales', () => {
    const landing_PartnerDrop= new ProductDrop()
    beforeEach (function(){
        cy.Login_admin();
        landing_PartnerDrop.getclickPartnerDrop().click({force:true})
    });

    it('Asserting the Table is visible or not !', () => {
        landing_PartnerDrop.getTable().should('be.visible')
    });
    
    it('Asserting the Table Header if Visible!', () => {
        landing_PartnerDrop.getTableHeader().should('be.visible')
        
    });

    it('Asserting the Table Columns Name if Visible ', () => {

       landing_PartnerDrop.getTableHeadersName().each(($elt)=>{
        cy.get($elt).should('be.visible')
       }) 
    });

    it('Asserting the TableBody if Visible ', () => {
        
        landing_PartnerDrop.getTableRowsCount().should('be.visible').should('be.visible')
    });
    it('Asserting the pagination buttons ', () => {
        cy.get('.rounded-l').should('be.visible')
        cy.get('.rounded-r').should('be.enabled')
    });

});