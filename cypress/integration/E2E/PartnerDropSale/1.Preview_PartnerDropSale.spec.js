///<reference types='cypress' />
import 'cypress-xpath'
const {ProductDrop}= require("../../../support/PageObjects/ADMIN/Admin_PartnerDropSales");

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


describe('Partner Drop Sales Funtionality', function (){
    const PartnerdropObject = new ProductDrop();
    beforeEach (function (){
        cy.fixture('Partner_drop_sales.json').then(function (drop_sale){
            this.drop = drop_sale   
        })
    });
    beforeEach (function(){
        cy.Login_admin();
        PartnerdropObject.getclickPartnerDrop().click({force:true})
    });
    it('Hide the drop which is published',function(){
        PartnerdropObject.getDrop().each(($el,index,$list)=>{
            const dropname= $el.text()
            let x= index+1
            if(dropname.includes("Multiple Product section  Drop")){ 
                cy.get("tr:nth-child("+x+") td:nth-child(4)").within(()=>{
                    cy.get("button").each(($elm,index)=>{
                        const button=$elm.text();
                        if(button==='PREVIEW'){
                           
                            cy.window().then((win)=> {
                                cy.stub(win, 'open', url => {
                                  win.location.href = url
                                }).as("popup");
                              });
                            cy.get($elm).click()
                            cy.get('@popup').should("be.called")
                        };
                        });
                    });
                    return false 
                };
            });
        return false 
    })
})