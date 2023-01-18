export class discord_activity{
    getDiscordBtn(){
       return  cy.xpath("//a[normalize-space()='Discord activity channels']")
    }

    getCreateDiscordChannelBtn(){
       return  cy.xpath("//a[normalize-space()='Create New Channel']")
    }

    getEditDiscordBtn(){
        return cy.get("td:nth-child(4) button:nth-child(1)")
    }

    getFirstRowColumnChannelActivityBtn(){
       return  cy.get('tbody tr:nth-child(1) td:nth-child(4) button:nth-child(2)')
    }

    getDiscordChannelNameField(){
        return cy.xpath("//input[@name='name']")
    }

    getDiscordChannelid(){
       return  cy.xpath('//div//input[@name="channelId"]')
    }
    getDiscordWeighting(){
        return cy.xpath('//div//input[@name="weighting"]')
    }
    getSubmitBtn(){
        return cy.xpath("//button[normalize-space()='Submit']")
    }

    getCriticalActionConfirmBtn(){
        return cy.get('.py-2 > .flex > .bg-transparent')
    }

    getFirstRow(){
        return cy.xpath("//table//tbody//tr[1]")
    }
    getDeactivebtn(){
       return  cy.xpath("td[4]//button[text()='DEACTIVATE']")
    }
    getActivatebtn(){
        return cy.xpath("td[4]//button[text()='ACTIVATE']")
    }
    getSuccessfullEditmsg(){
        return cy.get('.go318386747')
    }
    getLimitErrorMsg(){
        return cy.xpath("//span[@class='mt-2 block w-full sm:text-sm text-red-700']")
    }
    

}