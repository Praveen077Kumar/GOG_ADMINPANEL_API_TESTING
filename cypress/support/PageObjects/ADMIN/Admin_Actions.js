import 'cypress-xpath'


export class Actions{
    getActionsTab(){
        return cy.xpath("//a[@href='/actions']")
    }
    getFilterSelect(){
        return cy.get("select[name='statusFilter']")
    }
    getbuttonrow(){
        return cy.xpath("//tbody/tr[1]/td[6]")
    }
    getCancelbutton(){
        return cy.xpath("//div[contains(text(),'Cancelled')]")
    }
    getCompletebutton(){
        return cy.xpath("//div[contains(text(),'Completed')]")
    }
    getConfirmbutton(){
        return cy.xpath("//div[contains(text(),'Confirmed')]")
    }
    getExpiredbutton(){
        return cy.xpath("//div[contains(text(),'Expired')]")
    }
    getPendingbutton(){
        return cy.xpath("//div[contains(text(),'Pending')]")
    }
    getActionClosebutton(){
        return cy.xpath("//button[normalize-space()='Close']")
    }
   
}

export class Airdroptool{

    getAirdropbutton(){
        return cy.get('[class="mb-10 flex"] a')
    }

    getInputAddressText(){
        return cy.get('[class="col-span-12"] label[for="last-name"]').first()
    }
    getInputAddressField(){
        return cy.get('[class="col-span-12"] textarea')
    }

    getInputfileText(){
        return cy.get('[class="col-span-12"] label[for="last-name"]').last()
    }

    getInputFileField(){
        return cy.get('[class="col-span-12"] input')
    }
    getAmountText(){
        return cy.get('[class="mt-10"] label')
    }
    getAmountField(){
        return cy.get('[class="mt-2"] input')
    }
    getSubmitButton(){
        return cy.get("button[type='submit']")
    }


}

export class actionsSharedObjects{
    getTable(){
        return  cy.get("table[class*='w-full mb-2']")
    }
    getTableRows(){
        return cy.get("tbody tr ")
    }
    getSectionName(){
        return cy.xpath("//small[@class='text-xs']")
    }
    getTableHeaders(){
        return cy.get(" thead")
    }
    getTableColumnsHeaders(){
        return  cy.get(" thead tr th")
    }
    getButtonColumn(){
        return cy.get("td:nth-child(6) button")
    }
    getSectionNameButton(){
        return cy.get("[class*='bg-gray-400']").last()
    }
    getCloseButton(){
        return cy.xpath("//button[normalize-space()='Close']")
    }

    getNextPageButton(){
        return cy.xpath("//span[normalize-space()='Next']")
    }

    getPreviousPageButton(){
        return cy.xpath("//span[normalize-space()='Previous']")
    }
    getFirstRow(){
        return cy.get("tbody tr:nth-child(1)")
    }
    

}

