///<reference types='cypress' />

describe('GET THE STARDUST-PET METADATA WITH API TEST',()=>{
    it('Getting the MetaData of the Stardust-Pet Type and Varifying the status code & data', () => {

        cy.fixture('api/StardustMetadata/stardustPetMetaData').then(myFixture => {  
            let walletAddress= myFixture.walletaddress
            let nftToken= myFixture.nftToken
        cy.request({
            method:"GET",
            url:"https://api.staging-guildofguardians.com/api/player-wallet/nfts/"+walletAddress+"/"+nftToken
            }).then((response)=>{
                cy.log(JSON.stringify(response.body))
                expect(response.status).deep.equal(200)
                let assetcatagory= JSON.stringify(response.body.assetCategory);
                expect(assetcatagory).to.be.equal('"Pet"')
            });
        });
    });
});
