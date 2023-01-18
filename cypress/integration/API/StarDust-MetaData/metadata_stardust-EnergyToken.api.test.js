///<reference types='cypress' />

describe('GET THE STARDUST-ENERGY-TOKEN METADATA WITH API TEST',()=>{
    it('Getting the MetaData of the Stardust-Energy-Token and Varifying the response code & MetaData', () => {

        cy.fixture('api/StardustMetadata/stardustEnergyTokenMetaData').then(myFixture => {  
            let walletAddress= myFixture.walletaddress
            let nftToken= myFixture.nftToken
        cy.request({
            method:"GET",
            url:"https://api.staging-guildofguardians.com/api/player-wallet/nfts/"+walletAddress+"/"+nftToken
            }).then((response)=>{
                cy.log(JSON.stringify(response.body))
                expect(response.status).deep.equal(200)
                let assetcatagory= JSON.stringify(response.body.assetCategory);
                expect(assetcatagory).to.be.equal('"Others"')
            });
        });
    });
});
