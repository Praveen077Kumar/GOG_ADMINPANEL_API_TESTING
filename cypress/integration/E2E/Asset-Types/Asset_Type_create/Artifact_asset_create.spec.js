///<reference types='cypress' />
import "cypress-xpath"

const { v4: uuidv4 } = require('uuid');
const {HeroTypeObject,Artifact_item,reuse} = require('../../../../support/PageObjects/ADMIN/AssetTypes_Gifting')

const hero = new HeroTypeObject()
const artifact = new Artifact_item()
const reusable = new reuse()


describe('Artifact Asset Type ', () => {
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

    it('Create Artifact(Item) Asset type', function() {
        hero.getAssetType().click()
        hero.getNewAsseettype().click()
        hero.getAssetCategory().select('Artifact (Item)')
        artifact.artiface_base().type(this.inputdata.artifactBase)
        artifact.artiface_type().type(this.inputdata.typeartifact)
        artifact.role_preference().type(this.inputdata.artifactRole)
        reusable.getKey().type(this.key)
        reusable.getName().type(this.inputdata.Name_artifact+this.key)
        reusable.getRarity().select(this.inputdata.rarity_artifact)
        reusable.getIpfsFolder().type(this.inputdata.IPFSfolder_artifact)
        reusable.gettotalSupply().type(this.inputdata.TotalSuppy_artifact)
        reusable.getSubmitButton().click()
        
    });
})