import 'cypress-xpath'

export class CriticalAction{

    getConfirmBoxText(){
        return cy.xpath(" //strong[normalize-space()='Do you confirm?'] ")
    }
    getCriticalActionYesBtn(){
        return cy.xpath("//button[normalize-space()='Yes']")
    }
    getConfirmBoxNoBtn(){
        return cy.xpath("//button[normalize-space()='No']")
    }

    
    getCriticalKeyBoxText(){
        return cy.xpath("//em[normalize-space()='Security key required to proceed']")
    }
    getSecurityKeyInputBox(){
        return  cy.xpath("//input[@id='securityKey']")
    }
    getContinueForProceedCriticalAction(){
        return  cy.xpath("//button[normalize-space()='Continue']")
    }

  
    getCriticalBoxCancelbtn(){
        return cy.xpath("//button[normalize-space()='Cancel']")
    }
}