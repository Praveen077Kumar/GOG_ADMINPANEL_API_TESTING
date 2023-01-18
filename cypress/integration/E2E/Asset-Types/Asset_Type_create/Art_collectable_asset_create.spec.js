///<reference types='cypress' />
import "cypress-xpath"

const { v4: uuidv4 } = require('uuid');
const {HeroTypeObject,Art_collectable,reuse} = require('../../../../support/PageObjects/ADMIN/AssetTypes_Gifting')

const hero = new HeroTypeObject()
const art_collectable = new Art_collectable()
const reusable = new reuse()


describe('Art-collectable Asset Type ', () => {
    beforeEach ( function (){
        cy.fixture('asset_creates.json').then(function(inputs){
            this.inputdata= inputs         
        })
    });

    beforeEach(function(){
        const myuuid = uuidv4();        
        const trims = myuuid.slice(0,8)  
        this.key= trims     
    });

    beforeEach(function(){
        cy.Login_admin()     
    });

    it('Creating Art-collectable Asset Type', function() { 
        hero.getAssetType().click()
        hero.getNewAsseettype().click()
        hero.getAssetCategory().select('Art Collectable')
        art_collectable.collectable_base().type(this.inputdata.artBase)
        reusable.getKey().type(this.key)
        reusable.getName().type(this.inputdata.Name_art+this.key)
        reusable.getRarity().select(this.inputdata.rarity_art)
        reusable.getIpfsFolder().type(this.inputdata.IPFSfolder_art)
        reusable.gettotalSupply().type(this.inputdata.TotalSuppy_art)
        reusable.getSubmitButton().click()
    });

});