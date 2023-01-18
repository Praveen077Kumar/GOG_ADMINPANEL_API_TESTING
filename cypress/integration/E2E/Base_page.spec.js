///<reference types='cypress' />

import {BASE} from '../../support/PageObjects/ADMIN/base'

describe('Admin Panel Landing Page Varification', function(){
    const base= new BASE()
    this.beforeEach(()=>{
        cy.Login_admin() 
    })

    it('Confirm the Url of the Page is correct or not ',function(){
        cy.url().should('include',Cypress.env('host'))
    })

    it('Asseting the Header of Admin-Panel if Available', function() {
       
        base.getHeaderInfo().should('be.visible')
        base.getHeaderInfo().should('have.text','Guild of Guardians')
    });
    it('Checking the Navbar Visible and its Options are visible Correctly',function(){
        base.getRightNav().should('be.visible')
        base.getNavOptions().should('be.visible')
        
    })
    it('Varify the User logged in as a Admin ',function(){
        base.getLoggedInAsInfo().should('have.text','Logged as: admin')
    })

    it('Asserting the Options are Clickable or not of Left-Navbar',function(){
        cy.wait(1000)
        base.getNavOptions().each(($els)=>{
            cy.get($els).find('a').should('be.visible')
        })
        cy.wait(1000)
        base.getNavOptions().find('a').should('have.length',10)
    })
})