///<reference types='cypress' />
import "cypress-xpath"

const { v4: uuidv4 } = require('uuid');
const {HeroTypeObject,EnergyToken_Other,reuse} = require('../../../../support/PageObjects/ADMIN/AssetTypes_Gifting')

const hero = new HeroTypeObject()
const energy = new EnergyToken_Other()
const reusable = new reuse()


describe('Energy_token Asset Type ', () => {
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

    it('Creating Energy-TokeN Asset Type', function() {
        hero.getAssetType().click()
        hero.getNewAsseettype().click()
        hero.getAssetCategory().select('Energy Token (Other)')
        energy.energy_base().type(this.inputdata.enrgyBase)
        energy.charge().type(this.inputdata.charge)
        energy.cool_down_time().type(this.inputdata.cool_down)
        reusable.getKey().type(this.key)
        reusable.getName().type(this.inputdata.Name_Energy+this.key)
        reusable.getRarity().select(this.inputdata.rarity_Energy)
        reusable.getIpfsFolder().type(this.inputdata.IPFSfolder_Energy)
        reusable.gettotalSupply().type(this.inputdata.TotalSuppy_Energy)
        reusable.getSubmitButton().click()   
    });
})