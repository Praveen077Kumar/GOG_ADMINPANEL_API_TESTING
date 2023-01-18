import 'cypress-xpath'

export class BASE{
    getHeaderInfo(){
        return cy.get("div[id='__next'] div div div div div span")

    }
    getRightNav(){
        return cy.xpath("//body/div[@id='__next']/div/div[1]")
    }
    getUrl(){
        return cy.url()
    }
    getNavOptions(){
        return cy.get("div[id='__next'] div div div nav")
    }
    getLoggedInAsInfo(){
        return cy.get("div[id='__next'] div div div small")
    }


}