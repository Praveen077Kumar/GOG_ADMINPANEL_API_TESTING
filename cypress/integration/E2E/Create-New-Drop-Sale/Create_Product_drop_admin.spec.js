///<reference types='cypress' />
const CreateDropAdmin= require("../../../support/PageObjects/ADMIN/Admin_CreateDrop");
const { v4: uuidv4 } = require('uuid');
import 'cypress-xpath'

describe('Create Drop Admin', function(){
   
  before (function(){
    const myuuid = uuidv4();        
    const trims = myuuid.slice(0,8)  
    this.key_drop = trims
  })
    beforeEach (function(){
        cy.fixture('Create_drop.json').then(function (create){
            this.dropdata = create
        })
    })

    it('creating the drop and creating Product Also', function() {
        cy.Login_admin()
        CreateDropAdmin.getCreateDrop().click() 

        // Creating  Drop with command.js file.
        cy.create_drop(this.dropdata.name+this.key_drop,this.dropdata.title,
            this.dropdata.pagetitle,this.dropdata.descriptionTitle,
            this.dropdata.descriptionText,this.dropdata.limitperpurchase,
            this.dropdata.perwalletlimit,this.dropdata.walletaddress,this.dropdata.royality_wallet)
            cy.wait(2000)

       //Product creating in the drop (for changes refers the commands.js)
            cy.Create_Products(this.dropdata.No_of_products,this.dropdata.productname,this.dropdata.productDescription,
            this.dropdata.assettypeselect,this.dropdata.firstsaleprice,this.dropdata.lastsaleprice,
            this.dropdata.totalsupply,this.dropdata.availablesupply)
            cy.wait(2000)
      


        });
});