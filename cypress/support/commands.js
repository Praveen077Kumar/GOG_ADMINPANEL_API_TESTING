
///<reference types="cypress"/>

import './commands'
import 'cypress-file-upload';
import datepickerpage from '../support/PageObjects/utility/Calender_Start_Date_time_picker'
import dateUtils from '../support/PageObjects/utility/DateUtils'
import {datesselect} from  "./PageObjects/ADMIN/publish_reports.js"
import {CriticalAction} from './PageObjects/ADMIN/CriticalActionsPageObjects'

const { v4: uuidv4 } = require('uuid');
const admindata= require("../support/PageObjects/ADMIN/admin_login");
const CreateDropAdmin= require("../support/PageObjects/ADMIN/Admin_CreateDrop");
const dateUtility= require("../support/PageObjects/utility/DatepickerPackage");

var DateUtils= new dateUtils()
var picker= new datepickerpage()
var datacheck= new datesselect()
const Critical = new CriticalAction()




Cypress.Commands.add('Login_admin',function(){

    cy.viewport(1800,900) 
    cy.visit(Cypress.env("host"))
    admindata.getUsername().type(Cypress.env('username'))
    admindata.getPassword().type(Cypress.env('password'))
    admindata.getLoginbtn().click()
})

Cypress.Commands.add('CriticalActionConfirm',function(){
    Critical.getConfirmBoxText().should('have.text','Do you confirm?')
    Critical.getConfirmBoxText().should('be.visible')
    Critical.getConfirmBoxNoBtn().should('be.visible').should('be.enabled')
    Critical.getCriticalActionYesBtn().should('be.enabled').click()
    Critical.getCriticalKeyBoxText().should('have.text','Security key required to proceed')
    Critical. getContinueForProceedCriticalAction().should('be.disabled').should('be.visible')
    cy.wait(5000).then(()=>{
    cy.loginByGoogleApi().then((elm)=>{
        const key= elm
    Critical.getCriticalBoxCancelbtn().should('be.enabled').should('be.visible')
       Critical.getSecurityKeyInputBox().should('be.empty').type(key)
       Critical. getContinueForProceedCriticalAction().should('be.enabled').should('be.visible')
  
       Critical.getContinueForProceedCriticalAction().click()
       cy.wait(2000)
    })
    })
})



Cypress.Commands.add('selectMonth',(monthname)=>{    
    let currentmonth = new Date().getMonth()+1
    let givenMonth = DateUtils.getMonthIndexFromName(monthname)
    picker.getMonthName().then(($month)=>{
        if($month.text().includes(monthname)){
            return 
        }
        else{
            if(givenMonth > currentmonth){
                picker.getnavigateForwardButton().click()
            }
            else if(givenMonth < currentmonth){
                picker.getnavigateBackButton().click()
            }
        }
        cy.selectMonth(monthname)
    })
})

Cypress.Commands.add("selectTime",(time)=>{ 
    picker.getTime().each(($el,index,$list)=>{
        const selected_time= $el.text()
        if(selected_time.includes(time)){
            picker.time_select().each(($el,index,$list)=>{
                const timeselect = $el.text()
                if(timeselect==time){
                    cy.get($el).click()
                }
            });
        }
    });
});


Cypress.Commands.add('selectDay',(dayname)=>{
   picker.getCalenderDays().within(function(){
            picker.getDates().each(($el,index,$list)=>{
                const week= $el.text()
                if(week == dayname){
                   cy.wrap($el).click()
                }    
            }
        );
    });
});
Cypress.Commands.add('selectreportDay',(dayname)=>{
    datacheck.getCalenderDays1().within(function(){
        datacheck.getDates1().each(($el,index,$list)=>{
                 const week= $el.text()
                 if(week == dayname){
                    cy.wrap($el).click({force:true})
            }
        });
    });
 });

 Cypress.Commands.add('selectreportMonth',(monthname)=>{
    let currentmonth = new Date().getMonth()+1
    let givenMonth = DateUtils.getMonthIndexFromName(monthname)
    datacheck.getMonthName1().then(($month)=>{
        if($month.text().includes(monthname)){
            return 
        }
        else{
            if(givenMonth < currentmonth){
                datacheck.getnavigateBackButton1().click()
            }
        }
        cy.selectMonth(monthname)
    });
});


Cypress.Commands.add('create_drop',function(name,title,pagetitle,desc_title,desc_text,
                                            purchase_limit,perwallet_limit,wallet_address,royality_wallet){

    CreateDropAdmin.getName().type(name)
    dateUtility.startcalender()
    dateUtility.finishcalender()
    CreateDropAdmin.getTitle().type(title)
    CreateDropAdmin.getPageTitle().type(pagetitle)
    CreateDropAdmin.getDescriptionTitle().type(desc_title)
    CreateDropAdmin.getDescriptionText().type(desc_text)
    CreateDropAdmin.getAssetLimitperPurchase().type(purchase_limit)
    CreateDropAdmin.getLimitAssetPerWallet().type(perwallet_limit)
    CreateDropAdmin.getwalletaddress().type(wallet_address)
    CreateDropAdmin.getroyalitywallet().type(royality_wallet)
    CreateDropAdmin.getSaveButton().click()  
    cy.wait(2000)
});

Cypress.Commands.add('Create_Products',function(
    No_of_products,p_name,p_desc,p_asset,p_f_sale,l_sale,
    p_total_supply,p_available_supply){
   
        const myuuid = uuidv4();        
        const trims = myuuid.slice(0,8)  
        const key = trims

        let index =No_of_products
        for(let i=0;i<index;i++){
        cy.wait(7000)
        cy.xpath("//button[contains(text(),'+ Add product')]").click()
        cy.get("input[name='products["+i+"].name']").type(p_name+key)
        cy.get("textarea[name='products["+i+"].description']").type(p_desc)
        cy.xpath("//select[@name='products["+i+"].assetType']").select(p_asset,{force:true})
        cy.get("input[name='products["+i+"].firstSalePrice']").type(p_f_sale)
        cy.get("input[name='products["+i+"].lastSalePrice']").type(l_sale)
        cy.get("input[name='products["+i+"].originalAmount']").type(p_total_supply)
        cy.get("input[name='products["+i+"].availableAmount']").type(p_available_supply)
        cy.xpath("//button[contains(@class, 'bg-blue-400')]").click({force:true})
    }
});



    Cypress.Commands.add('loginByGoogleApi', () => {
        cy.log('Logging in to Google')
        cy.request({
          method: 'POST',
          url: 'https://www.googleapis.com/oauth2/v4/token',
          body: {
            grant_type: 'refresh_token',
            client_id: Cypress.env('clientId'),
            client_secret: Cypress.env('clientSecret'),
            refresh_token: Cypress.env('refreshToken'),
          },
        }).then(({ body }) => {
          const { access_token, id_token } = body
      
          cy.request({
            method: 'GET',
            url: 'https://www.googleapis.com/gmail/v1/users/me/messages?q="subject:Critical action confirmation request"',
            headers: { Authorization: `Bearer ${access_token}` },
          }).then(({ body }) => {
            const thread=body.messages[0].id
            // console.log(thread)

            cy.request({
                method: 'GET',
                url: `https://www.googleapis.com/gmail/v1/users/me/messages/${thread}`,
                headers: { Authorization: `Bearer ${access_token}` },
            }).then(({ body}) => {
               const debugdata= body.payload
               const dataencoded=debugdata.body.data
               const encoded=Buffer.from(dataencoded,"base64").toString("ascii")
            //    console.log(encoded)

               const security_key= encoded.match(/GKEY_[0-9A-Z]{8}/g)
            //    console.log(security_key[0])
                return security_key[0]

            })
          })
        })
})





//>>>>>>>>>>>>>>>>>> API  Testing >>><<<<<<<<<<<<<<<<<<<<<<<<<<
Cypress.Commands.add('AccessToken',()=>{
    
    cy.request({
        method:'POST',url:'https://api.stage.guildofguardians.com/oauth', 
        body:{
        username: 'admin',
        password:'EPTVLeEraHTDq2sy6a*D-KRXpK*eLYMv',
        grant_type: "password",
        client_id: "default",
        client_secret: "default"
        },
        }).then((response)=>{
          let access_token=response.body.access_token
          return access_token
        })
})

