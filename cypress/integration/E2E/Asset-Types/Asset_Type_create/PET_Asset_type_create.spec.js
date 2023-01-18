///<reference types='cypress' />
import "cypress-xpath"

const { v4: uuidv4 } = require('uuid');
const {HeroTypeObject,PetTypeObjects,reuse} = require('../../../../support/PageObjects/ADMIN/AssetTypes_Gifting')

const hero = new HeroTypeObject()
const pet = new PetTypeObjects()
const reusable = new reuse()


describe('PET Asset Types ', () => {
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

    it('Creating PET Asset-Type', function() {   
        hero.getAssetType().click()
        hero.getNewAsseettype().click()
        hero.getAssetCategory().select('Pet')
        pet.heropetType().select(this.inputdata.AssetClassDrop)
        pet.getEffect().type(this.inputdata.Effect)
        reusable.getKey().type(this.key)
        reusable.getName().type(this.inputdata.Name_Pet+this.key)
        reusable.getRarity().select(this.inputdata.rarity_Pet)
        reusable.getIpfsFolder().type(this.inputdata.IPFSfolder_Pet)
        reusable.gettotalSupply().type(this.inputdata.TotalSuppy_Pet)
        reusable.getSubmitButton().click()
    });
})