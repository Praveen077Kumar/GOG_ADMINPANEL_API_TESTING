
///<reference types='cypress' />

describe('Create Product Gift Action With the API Functionality',()=>{
    let access_token
    before(() => {
        cy.AccessToken().then((token)=>{
            access_token= token
    });
})

    it('Perform the Create Product Gift Transfer Action and then Fetch the Key and varify the status of Transfer ', () => {
        let responsedata
        cy.fixture('api/CriticalActions/DropPublishAction').then(myFixture => { 
        cy.request({
            method:"POST",
            url:"https://api.staging-guildofguardians.com/admin/api/actions",
            body: myFixture,
            failOnStatusCode: false,
            auth:{
                bearer: access_token
            } 
        }).then((response)=>{
            responsedata=response.body
            let responseMessage= JSON.stringify(responsedata.message)
            if(responseMessage ==='"Drop is already published"'){
                expect(response.status).deep.equal(400)
               throw new Error('Error! 400 , Drop Already Published!')
            }
            else{
            let id=responsedata._id
            let reqId = id  
            cy.request({
            method:"PUT",
            url:"https://api.staging-guildofguardians.com/admin/api/actions/"+reqId+"/confirm",
            auth:{
                bearer: access_token
            }
            }).then((response)=>{
                expect(response.status).deep.equal(204)
            })
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
                    cy.log("Done...Your Drop Has been Published.")
                })
            })
            }
        }); 
    });
    })

})