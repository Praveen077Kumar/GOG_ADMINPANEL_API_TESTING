///<reference types='cypress' />

import {LandingPage,gifting} from '../../../support/PageObjects/ADMIN/AssetTypes_Gifting'

describe('Asserting the Landing Page of the AssetType Section ', () => {
    const landing = new LandingPage()
    const gift = new gifting()

    beforeEach(()=>{
        cy.Login_admin() 
        gift.getassetTypeClick().click()

    })
    it('Assert the +New Asset button if it is Visible ', () => {
        landing.getNewAssetButton().should('have.text','+ New Asset Type')
    });
    it('Assert the Page of Name is visible correct ', () => {
        landing.getPageName().should('be.visible')
        landing.getPageName().should('have.text','Asset Types')
    });
    it('Assert the Table and Header if it is Available ', () => {
        landing.getTable().should('be.visible')
        landing.getTableHeader().should('be.visible')
    });
    it('Asserting the Table body and its Columns and rows showing Correct if available', () => {
        landing.getTableHeaderNames().each(($elt)=>{
            cy.get($elt).should('be.visible')
        })
        landing.getTableBodyRows().should('be.visible')
    });
    it('Asserting the pagination buttons ', () => {
        cy.get('.rounded-l').should('be.visible')
        cy.get('.rounded-r').should('be.enabled')
    });
});