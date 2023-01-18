///<reference types='cypress' />

describe('Applying the Login Authentication with AccessToken',()=>{
    let access_token
    before(() => {
        cy.AccessToken().then((token)=>{
            access_token= token
    });
})

    it('Get the All Actions Data from Admin-Panel', () => {
        let responsedata
        cy.request({
            method:"GET",
            url:"https://api.stage.guildofguardians.com/admin/api/actions",
            headers:{
                "accept": "application/json, text/plain, */*",
                "Content-Type": "application/json",
                'authorization': `Bearer ${access_token}`
            }
        }).then((response)=>{
            responsedata=response.body[0]
            cy.writeFile('cypress/support/Mocks/GetActionList/getActionList.json',responsedata,'utf-8')
            expect(response.status).deep.equal(200)

        })
        cy.readFile('cypress/support/Mocks/GetActionList/getActionList.json').then((data)=>{
            expect(JSON.stringify(responsedata)).contains(JSON.stringify(data))
        }); 
    });

})