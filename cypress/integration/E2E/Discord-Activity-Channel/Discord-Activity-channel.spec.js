///<reference types='cypress'/>

import {discord_activity} from '../../../support/PageObjects/ADMIN/Discord_Activity-Channel'



describe('Discord-Activity-Channel Testing', () => {
    const DiscordPageObject= new discord_activity
    beforeEach(() => {
        cy.viewport(1600,900) 
        cy.Login_admin() 
        DiscordPageObject.getDiscordBtn().should('be.visible').click() //

    });

    const randomNumber= Math.floor(10000000000 + Math.random() * 10000000000000);
    it('CHECKING THE DISCORD-PAGE ACCESSIBLE OR NOT IN ADMIN-PANEL', () => {
        cy.wait(2000).then(()=>{
            cy.url().then((link)=>{
                const linktext= link
                expect(linktext).to.contain("discord");
            })
        })
        cy.wait(3000)
        
    });
    it('CREATE THE DISCORD-CHANNEL TO CHECK ITS WORKING FINE OR NOT!', () => {
        DiscordPageObject.getCreateDiscordChannelBtn().should('be.visible').click() 
        DiscordPageObject.getDiscordChannelNameField().type("Automation DiscrodCheck ") 
        DiscordPageObject.getDiscordChannelid().should('be.visible').should('be.enabled').type(randomNumber)
        DiscordPageObject.getDiscordWeighting().should('be.visible').should('be.enabled').type(2)
        //if you want to create then you add the ".click()" in .
        DiscordPageObject.getSubmitBtn().should('be.visible')
        cy.end()
        cy.go(-1)
        // cy.wait(3000)
        
    });
    it('CREATE THE DISCORD-CHANNEL WITH THE WEIGHTING VALUE IN DECIMAL POINTS', () => {
       
        DiscordPageObject.getCreateDiscordChannelBtn().should('be.visible').click()  //create channel button
        DiscordPageObject.getDiscordChannelNameField().type("Automation DiscrodCheck ") 
        DiscordPageObject.getDiscordChannelid().should('be.visible').should('be.enabled').type(randomNumber)
        DiscordPageObject.getDiscordWeighting().should('be.visible').should('be.enabled').type(0.05)
        DiscordPageObject.getSubmitBtn().should('be.visible') //if you want to create then you add the ".click
        cy.wait(2000)
        
    });

    it.only('CREATE THE DISCORD-CHANNEL WITH THE WEIGHTING VALUE MORE THAN THE LIMIT SPECIFIED SHOWING ERROR OR NOT!', () => {
       
        DiscordPageObject.getCreateDiscordChannelBtn().should('be.visible').click()  
        DiscordPageObject.getDiscordChannelNameField().type("Automation DiscrodCheck ") 
        DiscordPageObject.getDiscordChannelid().should('be.visible').should('be.enabled').type(randomNumber)
        DiscordPageObject.getDiscordWeighting().should('be.visible').should('be.enabled').type(2.6)
        DiscordPageObject.getSubmitBtn().should('be.visible').click()
        DiscordPageObject.getLimitErrorMsg().should('be.visible').should('have.text','Max weighting limit is 2')
        cy.wait(1000)
        
    });

    it('CHEECKING THE "EDIT" FUNCTIONALITY OF CREATED DISCORD-ACTIVITY', () => {
        DiscordPageObject.getFirstRow().within(()=>{
            DiscordPageObject.getEditDiscordBtn().should('be.visible').click()
                })
        DiscordPageObject.getDiscordChannelNameField().clear().type("Automation DiscrodCheck ") 
        DiscordPageObject.getDiscordChannelid().should('be.enabled').clear().type(randomNumber)
        DiscordPageObject.getDiscordWeighting().should('be.enabled').clear().type(2)
        DiscordPageObject.getSubmitBtn().should('be.enabled').click()
        DiscordPageObject.getSuccessfullEditmsg().should('be.visible')
        cy.wait(2000)

    });
    
    it('APPLYING ACTIVATE-DISCORD-ACTIVITY IF DEACTIVATE,& DEACTIVATE-DISCORD-ACTIVITY IF ALREADY ACTIVATE', () => {

      DiscordPageObject.getFirstRowColumnChannelActivityBtn().invoke('text').then((textdata)=>{
            if(textdata==='DEACTIVATE'){
            DiscordPageObject.getFirstRow().within(()=>{
            DiscordPageObject.getDeactivebtn().click()
                })
              DiscordPageObject.getCriticalActionConfirmBtn().should('be.visible').click()
            }
            else{
            DiscordPageObject.getFirstRow().within(()=>{
            DiscordPageObject.getActivatebtn().should('be.visible').click()
                })
            DiscordPageObject.getCriticalActionConfirmBtn().should('be.visible').click()
            }
        })
        cy.wait(2000)
    });
});