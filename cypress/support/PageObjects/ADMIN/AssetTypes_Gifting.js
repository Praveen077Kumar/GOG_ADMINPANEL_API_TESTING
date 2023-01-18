//Page Objects of Asset types creating and Gift the asset types 
import 'cypress-xpath'
    export class gifting{

        getassetTypeClick(){
            return cy.xpath("//a[normalize-space()='Asset types']")
        }
        getFirstAsset(){
            return cy.xpath("//tbody/tr[1]/td[4]/a[1]")
        }
        getsourceselect(){
            return cy.get("select[placeholder='Select source address...']")
        }
        getdestinationAddress(){
            return cy.get("textarea[name='destinationAddresses']")
        }
        getCSVDropArea(){
            return cy.get("input[type='file']")
        }
        getSubmitButton(){
            return cy.get("button[type='submit']")
    
        }
        getAssetSuccessfulMsg(){
            return  cy.xpath('//*[@id="__next"]/div[1]/div/div')
        }
        getNoteBox(){
            return cy.get("textarea[name='notes']")
        }
        getSubmitButton(){
            return cy.get("button[type='submit']")
        }
        getGiftedSuccessfulMsgAssert(){
            return cy.get('.go318386747')
        }

    }

    export class HeroTypeObject{

        getAssetType(){
            return cy.get("[href='/asset-types']")
        }
        getNewAsseettype(){
            return cy.get("a[href='/asset-types/create']")
        }
        getAssetCategory(){
            return cy.get("select[name='assetTypeDiscriminator']")
        }

        provideAssetDropdown(){
            return cy.get("select[name='assetClass']")
        }
        getInputTagline(){
            return cy.get("input[name='tagline']")
        }
        getElementDropdown(){   
            return cy.get("select[name='element']")
        }
        getfactionDropdown(){
            return cy.get("select[name='faction']")
        }
        getSubmitButton(){
            return cy.get("button[type='submit']")
    
            }
        
    }

    export class PetTypeObjects{

        getAssetType(){
            return cy.get("[href='/asset-types']")
        }
        getNewAsseettype(){
            return cy.get("a[href='/asset-types/create']")
        }
        getAssetCategory(){
            return cy.get("select[name='assetTypeDiscriminator']")
        }
        heropetType(){
            return cy.get("select[name='petType']")
        }
        getEffect(){
            return cy.get("input[name='effect']")
        } 
        getSubmitButton(){
            return cy.get("button[type='submit']")
    
            }
        

    }

    export class GuildToken_Other{
        assetbase(){
            return cy.get("input[name='assetBase']") 
        }
        totalmembe(){
            return cy.get("input[name='totalMembers']")
        }
        crafting_slot(){
            return cy.get("input[name='craftingSlots']")
        }
        getSubmitButton(){
            return cy.get("button[type='submit']")
    
            }
    }

    export class EnergyToken_Other{

        energy_base(){
            return cy.get("input[name='assetBase']")
        }
        charge(){
            return cy.get("input[name='charges']")
        }
        cool_down_time(){
            return cy.get("input[name='coolDownTime']")
        }
        getSubmitButton(){
            return cy.get("button[type='submit']")
    
            }
    }

    export class Equipment_item {

        requip_base(){
              return cy.get("input[name='assetBase']")
         }
                    
        
        Equipment_slot(){
            return cy.get("input[name='equipmentSlot']")
    }

        role_preference(){
            return cy.get("input[name='rolePreference']")
        }
        getSubmitButton(){
            return cy.get("button[type='submit']")
    
            }
    }
    

    export class Artifact_item {
        artiface_base(){
            return cy.get("input[name='assetBase']")
        }

        artiface_type(){
            return cy.get("input[name='artifactType']")
        }
        role_preference(){
            return cy.get("input[name='artifactAbilityDesc']")
        }
        getSubmitButton(){
            return cy.get("button[type='submit']")
    
            }
    }

    export class Art_collectable {

         collectable_base(){
            return cy.get("input[name='assetBase']")
        }
        getSubmitButton(){
            return cy.get("button[type='submit']")
    
            }
    }

    export class reuse{

        getKey(){
        // const key= this.uuid()
        return cy.get("input[name='key']")
        }

        getName(){

            return cy.get("input[name='name']")
        }

        getRarity(){
        return cy.get("select[name='rarity']")
        }
        getIpfsFolder(){
        return cy.get("input[name='ipfsFolder']")
        }

        gettotalSupply(){
        return cy.get("input[name='totalSupply']")
        }

        getSubmitButton(){
        return cy.get('.inline-flex')
        }

    }



 export class edit{
    pass 
 }

 export class LandingPage{
    getNewAssetButton(){
        return cy.get("a[href='/asset-types/create']")
    }
    getPageName(){
        return cy.get("main[id='main'] div section div h3")
    }
    getTable(){
        return cy.get("table[class*='w-full']")
    }
    getTableHeader(){
        return cy.get("table[class*='w-full'] thead ")
    }
    getTableHeaderNames(){
        return cy.get("table[class*='w-full'] thead th")
    }
    getTableBody(){
        return cy.get("table[class*='w-full'] thead th")
    }
    getTableBodyRows(){
        return cy.get("table[class*='w-full'] tbody ")
    }
    getNextButton(){
        return  cy.get('.rounded-r')
    }
    getPreviousButton(){
        return cy.get('.rounded-l')
    }
 }





















