///<reference types='cypress' />
import "cypress-xpath"

const { v4: uuidv4 } = require('uuid');
const {HeroTypeObject,reuse} = require('../../../../support/PageObjects/ADMIN/AssetTypes_Gifting')

const hero = new HeroTypeObject()
const reusable = new reuse()


describe('Hero Asset Type', () => {
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
    it('Creating Hero Asset Type', function() {
        hero.getAssetType().click()
        hero.getNewAsseettype().click()
        hero.getAssetCategory().select('Hero')
        hero.provideAssetDropdown().select(this.inputdata.AssetClassDropdown)
        hero.getInputTagline().type('this is usually automated ')
        hero.getElementDropdown().select(this.inputdata.ElementDropdown)
        hero.getfactionDropdown().select(this.inputdata.FactionDropdown)
        reusable.getName().type(this.inputdata.Name_Hero+this.key)
        reusable.getKey().type(this.key)
        reusable.getRarity().select(this.inputdata.rarity_Hero)
        reusable.getIpfsFolder().type(this.inputdata.IPFSfolder_Hero)
        reusable.gettotalSupply().type(this.inputdata.TotalSuppy_Hero)
        reusable.getSubmitButton().click()

    });
});