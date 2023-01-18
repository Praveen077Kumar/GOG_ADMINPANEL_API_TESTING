///<reference types='cypress' />

describe("DIDN'T GET THE STARDUST METADATA NOT SHOWING  WITH 404!",()=>{

    it('Should Not Show the Stardust Data and Varifing the Response status with 404 code .', () => {
        cy.request({
            method:"GET",
            url:"https://api.staging-guildofguardians.com/api/player-wallet/nfts/",
            failOnStatusCode: false
            }).then((response)=>{
                expect(response.status).deep.equal(404)
                cy.log(JSON.stringify(response.body))
                let responseMsg= JSON.stringify(response.body.error)
                expect(responseMsg).to.be.equal('"PathNotFound"')
            });
    });
});
