
///<reference types='cypress' />

describe('Get the Pending Actions From the API of Admin-Panel',()=>{
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
            url:"https://api.staging-guildofguardians.com/admin/api/actions?filter=%7B%22status%22%3A%22Confirmed%22%7D",
            qs:{
                "page":"1" ,
                "per_page":"10",     
            },
            auth:{
                bearer: access_token
            }
            
        }).then((response)=>{
            responsedata=response.body
            cy.log(new Array(responsedata).length)
            expect(response.status).deep.equal(200)
        }); 
    });

})