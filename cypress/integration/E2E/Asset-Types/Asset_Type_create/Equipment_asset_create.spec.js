///<reference types='cypress' />
import "cypress-xpath"

const { v4: uuidv4 } = require('uuid');
const {HeroTypeObject,Equipment_item,reuse} = require('../../../../support/PageObjects/ADMIN/AssetTypes_Gifting')

const hero = new HeroTypeObject()
const Equip = new Equipment_item()
const reusable = new reuse()


describe('Equipment Asset Types ', () => {
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
    it('Create Equipment-(item) Asset Type', function(){
        hero.getAssetType().click()
        hero.getNewAsseettype().click()
        hero.getAssetCategory().select('Equipment (Item)')
        Equip.requip_base().type(this.inputdata.equipBase)
        Equip.Equipment_slot().type(this.inputdata.equipSlot)
        Equip.role_preference().type(this.inputdata.Role)
        reusable.getKey().type(this.key)
        reusable.getName().type(this.inputdata.Name_Equip+this.key)
        reusable.getRarity().select(this.inputdata.rarity_Equip)
        reusable.getIpfsFolder().type(this.inputdata.IPFSfolder_Equip)
        reusable.gettotalSupply().type(this.inputdata.TotalSuppy_Equip)
        reusable.getSubmitButton().click()
    });

})