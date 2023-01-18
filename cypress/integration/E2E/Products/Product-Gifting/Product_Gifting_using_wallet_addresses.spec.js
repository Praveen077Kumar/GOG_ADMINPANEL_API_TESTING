///<reference types='cypress' />

const ProductUtility= require("../../../../support/PageObjects/ADMIN/admin_product.js");
import 'cypress-xpath'

describe('Product Gifting BY Wallet Address ', () => {
   
   beforeEach (function (){
        cy.fixture('product_gifting.json').then(function (inputelement){
            this.datainput = inputelement
        })
    })
    beforeEach(function(){
        cy.Login_admin()
    })
    it('Sending the Product Gifting Using the Input Address ', function() {
        cy.get("[href='/products']").click({force:true})
        ProductUtility.getSeachGIFTid().each(($el,index,$list)=>{
            const text= $el.text()
            if(text.includes(this.datainput.searchElement)){
            ProductUtility.getGIFTBUTTONid().eq(index).each(($els,index,$list)=>{ 
                const tex= $els.find('a')
                cy.get(tex).click()
                })
            }
        })
        ProductUtility.getGiftAddresses().type(this.datainput.GiftDestinationAddresses)
        cy.get("button[type='submit']").click()
        cy.CriticalActionConfirm()
        ProductUtility.getGiftSuccessMsg().should('be.visible').should('have.text','Gift action completed successfully')
    });
})

    