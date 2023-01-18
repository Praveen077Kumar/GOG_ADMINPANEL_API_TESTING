class admin_Products{

    getProductclick(){
        return cy.get("[href='/products']")
    }
    getSeachGIFTid(){
        return cy.get("tr td:nth-child(2)")
    }
    getGIFTBUTTONid(){
        return cy.get("tr td:nth-child(5)")
    }
    getSectionName(){
        return cy.get("main[id='main'] div div h3")
    }
    getTable(){
        return cy.get("main[id='main'] div div div table")
    }
    getTableHeader(){
        return cy.get("main[id='main'] div div div table thead")
    }
    getTableBody(){
        return cy.get("main[id='main'] div div div table tbody")
    }
    getTableHeadersName(){
        return cy.get("main[id='main'] div div div table thead th")
    }
    getGiftSuccessMsg(){
        return cy.get('.go318386747')
    }

    getGiftAddresses(){
        return cy.get("textarea")
    }
    
}
module.exports = new admin_Products();