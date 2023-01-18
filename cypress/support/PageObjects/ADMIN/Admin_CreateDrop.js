class createDrop{


    getCreateDrop(){
        return  cy.get("[href='/drops/create']")
        
    }

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
    getwalletaddress(){
        return cy.get("input[name='salesWallet']")
    }
    getroyalitywallet(){
        return cy.get("input[name='royaltiesWallet']")
    }
    getSaveButton(){
        return cy.get('.inline-flex')
    }
    // getaddproduct(){
    //     return cy.get('.bg-indigo-700')
    // }


    regexproduct(){
        return cy.get("[name='products[0].name']")
    }

    getProductDescription(){
        // return cy.get("textarea[name='products[1].description']")
        return cy.get("[name='products[0].description']")
    }

    getAssetType(){

        return cy.get("select[placeholder='Select...']")
    }

    getFirstSalePrice(){
        return cy.get("[name='products[0].firstSalePrice]")
    }
    getLastSalePrice(){
        return cy.get("[name='products[0].lastSalePrice']")
    }

    getTotalSupply(){
        return cy.get("[name='products[0].originalAmount']")

    }

    getAvailableSupply(){
        return cy.get("[name='products[0].availableAmount']")
    }

    getSoldAmount(){
        return cy.get("[name='products[0].soldAmount']")
    }

  
    getSaveButtonproduct(){
        return cy.get('.bg-blue-400')
    }
    
 

}




module.exports= new createDrop();