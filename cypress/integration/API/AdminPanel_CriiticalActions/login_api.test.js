///<reference types='cypress' />

describe('Applying the Login Authentication with AccessToken',()=>{
    let access_token
    before(() => {
        cy.AccessToken().then((token)=>{
            access_token= token
    });
})
    it('Testing the Login State of AdminPanel', () => {
        cy.request({ 
            method:'GET',url:'https://api.stage.guildofguardians.com/api/users/me',
            headers: {
                "accept": "application/json, text/plain, */*",
                "accept-encoding": "gzip, deflate, br",
                "Content-Type": "application/json",
                'authorization': `Bearer ${access_token}`
            },
            body:{
                grant_type:'Bearer Token'
            }
        }).then((response)=>{
            expect(response.body.username).to.be.equal('admin')
        })
    })
})
