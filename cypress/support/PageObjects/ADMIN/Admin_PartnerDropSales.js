import 'cypress-xpath'
export class ProductDrop{

    getclickPartnerDrop(){
        return cy.xpath("//a[normalize-space()='Partner Drop Sales']")
    }
    getDrop(){
        return cy.get("table tbody tr td:nth-child(1)")
    }

    getCritical_actions_ConfirmBtn(){
        return cy.xpath("//button[normalize-space()='Yes']")
    }
 
    getCriticalInputField(){
        return cy.xpath("//input[@id='securityKey']")
    }
    getContinueCriticalActionbtn(){
        return cy.xpath("//button[normalize-space()='Continue']")
    }
    getSuccessMsg(){
        return cy.get('.go318386747')
    }




    // <<<<<<<<<<<<<<<<<<<< EDIT SECTION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


    getName(){
        return cy.get("input[name='name']")
    }

    getTitle(){
        return cy.get("[name='pageTitle']")
    }

    getPageTitle(){
        return cy.get("[name='pageTitleText']")
    }

    getDescriptionTitle(){
        return cy.get("[name='descriptionTitle']")
    }

    getDescriptionText(){
        return cy.get("[name='descriptionText']")

    }
    getAssetLimitperPurchase(){
        return cy.get("[name='limitPerPurchase']")
    }

    getLimitAssetPerWallet(){
        return cy.get("[name='limitPerWallet']")
    }

    getProductName(){
        return cy.get("[name='products[1].name']")
    }

    getProductDescription(){
        return cy.get("[name='products[1].description']")
    }

    getAssetType(){

        return cy.get("[placeholder='Select...']")
    }

    getFirstSalePrice(){
        return cy.get("[name='products[1].firstSalePrice']")
    }
    getLastSalePrice(){
        return cy.get("[name='products[1].lastSalePrice']")
    }

    getTotalSupply(){
        return cy.get("[name='products[1].originalAmount']")
    }
    getAvailableSupply(){
        return cy.get("[name='products[1].availableAmount']")
    }
    getSoldAmount(){
        return cy.get("[name='products[1].soldAmount']")
    }
    getwalletaddress(){
        return cy.get("input[name='salesWallet']")
    }
    getroyalitywallet(){
        return cy.get("input[name='royaltiesWallet']")
    }



    //landing page objects 
    getTable(){
        return cy.get("table[class$='w-full']")
    }
    
    getTableHeader(){
        return cy.get("table[class$='w-full'] thead")
    }
    getTableBody(){
        return cy.get("table[class$='w-full'] tbody")
    }

    getTableHeadersName(){
        return cy.get("table[class$='w-full'] thead th")
    }
    getTableRowsCount(){
        return cy.get("table[class$='w-full'] tbody  tr")
    }
    getPreviousButton(){
        return cy.xpath("(//button/span['text=Next'])[1]")
    }
    getNextButton(){
        return cy.xpath("(//button/span['text=Next'])[2]")
    }
}
