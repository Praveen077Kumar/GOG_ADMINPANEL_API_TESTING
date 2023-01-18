///<reference types='cypress' />
import "cypress-xpath"

const { v4: uuidv4 } = require('uuid');
const {HeroTypeObject,GuildToken_Other,reuse} = require('../../../../support/PageObjects/ADMIN/AssetTypes_Gifting')

const hero = new HeroTypeObject()
const guildtoken = new GuildToken_Other()
const reusable = new reuse()


describe('Guild-Token Asset Types ', () => {
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
    it('Creating Guild-TokeN Asset Type', function() {
        hero.getAssetType().click()
        hero.getNewAsseettype().click()
        hero.getAssetCategory().select('Guild Token (Other)')
        guildtoken.assetbase().type(this.inputdata.assetBase)
        guildtoken.totalmembe().type(this.inputdata.Total_Token)
        guildtoken.crafting_slot().type(this.inputdata.Crafting_Slots)
        reusable.getKey().type(this.key)
        reusable.getName().type(this.inputdata.Name_Guild+this.key)
        reusable.getRarity().select(this.inputdata.rarity_Guild)
        reusable.getIpfsFolder().type(this.inputdata.IPFSfolder_Guild)
        reusable.gettotalSupply().type(this.inputdata.TotalSuppy_Guild)
        reusable.getSubmitButton().click()
        
    });
})