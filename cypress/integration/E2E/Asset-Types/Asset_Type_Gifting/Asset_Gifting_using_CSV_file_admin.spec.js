///<reference types='cypress' />
const {gifting} = require('../../../../support/PageObjects/ADMIN/AssetTypes_Gifting')
const gift= new gifting()

describe('Asset Types Create/Asset Type Edit / Asset Type transfer ', function(){
    beforeEach ( function (){
        cy.Login_admin() 
        cy.fixture('assetTypes_gifting.json').then(function(inputs){
            this.inputdata= inputs         
        });
    });
    it('Gifting An Assets Using CSV file ', function () {
        gift.getassetTypeClick().click()
        gift.getFirstAsset().click()
            gift.getsourceselect().select(this.inputdata.giftsendId)
            gift.getCSVDropArea().attachFile('Wallet_address_sendings.xls')
            gift.getNoteBox().type(this.inputdata.Note)
            gift.getSubmitButton().click()
            cy.CriticalActionConfirm()
            gift.getGiftedSuccessfulMsgAssert().should('be.visible').should('have.text','Asset Transfer action completed successfully')
            cy.wait(1000)                                   
            cy.go(-1)                                        
    });       
}); 












