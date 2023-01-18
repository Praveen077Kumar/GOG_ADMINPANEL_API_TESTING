
///<reference types='cypress' />

describe('Create Asset Transfer Action With the API Functionality',()=>{
    let access_token
    before(() => {
        cy.AccessToken().then((token)=>{
            access_token= token
    });
})

    it('Perform the Create Asset Transfer Action and then Fetch the Key and varify the status of Transfer ', () => {
        let responsedata
        cy.fixture('api/CriticalActions/AssetTransferAction').then(myFixture => { 
        cy.request({
            method:"POST",
            url:"https://api.staging-guildofguardians.com/admin/api/actions",
            body: myFixture,
            auth:{
                bearer: access_token
            } 
        }).then((response)=>{
            expect(response.status).to.be.deep.equal(201)
            responsedata=response.body
            let id=responsedata._id
            let reqId = id  
            cy.request({
            method:"PUT",
            url:"https://api.staging-guildofguardians.com/admin/api/actions/"+reqId+"/confirm",
            auth:{
                bearer: access_token
            }
            }).then
            cy.wait(5000).then(()=>{
                cy.loginByGoogleApi().then((elm)=>{
                    const key= elm
                    return key
                })
            }).then((criticalKey)=>{
                cy.request({
                    method:"PUT",
                    url:"https://api.staging-guildofguardians.com/admin/api/actions/"+reqId+"/run",
                    body: {"securityKey":criticalKey},
                    auth:{
                        bearer: access_token
                    } 
                }).then((response)=>{
                    expect(response.status).to.be.equal(204)
                })
            })
        }); 
    });
    })

})