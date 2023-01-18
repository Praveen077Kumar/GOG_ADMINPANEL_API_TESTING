///<reference types='cypress' />
import "cypress-xpath"

const { v4: uuidv4 } = require('uuid');
const {gifting} = require('../../../../support/PageObjects/ADMIN/AssetTypes_Gifting')
const gift= new gifting()


describe('Asset Types Create/Asset Type Edit / Asset Type transfer ', function(){
    beforeEach ( function (){
        cy.Login_admin() 
        cy.fixture('assetTypes_gifting.json').then(function(inputs){
            this.inputdata= inputs         
        });
        const myuuid = uuidv4();        
        const trims = myuuid.slice(0,8)  
        this.key= trims     
    });
    it('Gifting Assets Using CSV file ', function () {
        gift.getassetTypeClick().click()
        gift.getFirstAsset().click().then(()=>{
            gift.getsourceselect().select(this.inputdata.giftsendId)
            gift.getdestinationAddress().should('be.enabled').type(this.inputdata.asset_Address)
            gift.getNoteBox().should('be.enabled').type(this.inputdata.Note)
            gift.getSubmitButton().click()
            cy.CriticalActionConfirm()
            gift.getGiftedSuccessfulMsgAssert().should('be.visible').should('have.text','Asset Transfer action completed successfully')
            cy.wait(1000)                                   
            cy.go(-1)

        })
    })
})

  


















// describe('Asset Types Create/Asset Type Edit / Asset Type transfer ', function(){
   
//     beforeEach ( function (){
//         cy.fixture('assetTypes_gifting.json').then(function(inputs){
//             this.inputdata= inputs         
//         })
//     });

//     beforeEach(function(){
//         const myuuid = uuidv4();        
//         const trims = myuuid.slice(0,8)  
//         this.key= trims     
//     });

//     beforeEach(function(){
//         cy.Login_admin()     
//     });


//     it('Asset Types gift Using the wallet Addresses', function() {
//         gift.getAssetType().click()
//         gift.getAssetName().each(($el,index,$list)=>{
//             const text= $el.text()
//             if(text.includes(this.inputdata.dropFindInput)){
//                 gift.getRowButton().eq(index).each(($els,index,$list)=>{ 
//                 const tex= $els.find("a")
//                 if(this.inputdata.assetclick =='ASSET TRANSFER'){
//                     cy.get(tex).eq(0).click()
//                     cy.get("select[placeholder='Select source address...']").select(this.inputdata.giftsendId)
//                     cy.get("textarea[name='destinationAddresses']").type(this.inputdata.asset_Address)
//                     cy.get("textarea[name='notes']").type(this.inputdata.Note)
//                     cy.get("button[type='submit']").click()
//                     cy.get(':nth-child(1) > strong').should('contain','Asset Transfer')
//                     cy.get("[class='flex justify-end pt-2']").each(($elt,index,$list)=>{
//                         if(this.inputdata.critical_click == 'Yes'){
//                           cy.get($elt).find('button').eq(0).click()
//                           cy.wait(15000).then(async()=>{
//                           const gmail = new GmailAPI()
//                           const key = await gmail.readInboxContent('Subject:Critical action confirmation request')
//                           cy.wait(1000)
//                                 cy.get('#securityKey').type(key)
//                                 })
//                                 .then(function(){
//                                     cy.get("[class='flex justify-end pt-2']").each(($elt,index,$list)=>{
//                                         if(this.inputdata.critical_key_Option == 'Cancel'){
//                                             cy.get($elt).find('button').eq(0).click().should("have.text","Cancel")
//                                             cy.go(-2)
//                                         }
//                                         else if(this.inputdata.critical_key_Option == 'Continue'){
//                                             cy.get($elt).find('button').eq(1).click().should("have.text","Continue")
//                                             cy.wait(1000)                                   
//                                             cy.go(-1)
//                                         }
//                                     })
//                                 })
//                         }
//                         else{
//                             cy.xpath("//button[text()='No']").click()
//                             cy.go(-1)
//                             cy.wait(1000)
//                         }
//                     })     
//                 }                 
//                 })
//             }
//         })
//     });
// })





