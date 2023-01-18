///<reference types='cypress' />

import {Actions,Airdroptool} from '../../../support/PageObjects/ADMIN/Admin_Actions';
describe('Testing the AirDrop Functionality', () => {
    const actions= new Actions()
    const airdrop= new Airdroptool()


    beforeEach(function(){
        cy.Login_admin()
        actions.getActionsTab().click({force:true}) 
        cy.fixture('Actions.json').then(function(walletaddresses){
            this.wallets= walletaddresses       
        })

    })

    it('Varifing the Airdrop button & Submit Button if available', function() {
        airdrop.getAirdropbutton().then(($airbutton)=>{
            const airbuttontext= $airbutton.text()
            expect(airbuttontext).to.equal('Airdrop')
        })
        airdrop.getAirdropbutton().click()
        airdrop.getAirdropbutton().should('be.visible')
        airdrop.getSubmitButton().then(($button)=>{
            const buttontext= $button.text()
            expect(buttontext).to.equal('Submit')
        })
        airdrop.getSubmitButton().should('be.visible')
    });

    it('Varifing the Input address Fields working or not! ', function(){
        airdrop.getAirdropbutton().click({force:true})
        airdrop.getInputAddressText().then(($inputadd)=>{
            const inputaddText=$inputadd.text()
            expect(inputaddText).to.equal('Input addresses (every address on new line)')
        })
        airdrop.getInputAddressField().should('be.visible')
        airdrop.getInputAddressField().should('be.enabled')
    });

    it('Varifing the Input File Field working or not!', function() {
        airdrop.getAirdropbutton().click({force:true})
        airdrop.getInputfileText().then(($inputFile)=>{
            const inputFileText= $inputFile.text()
            expect(inputFileText).to.equal('Input file (only one file)')
        })
        airdrop.getInputFileField().should('be.enabled')
       
    });

    it('Varifing the Amount field working or not!', function() {
        airdrop.getAirdropbutton().click({force:true})
        airdrop.getAmountText().then(($el)=>{
            const amounttext= $el.text()
            expect(amounttext).to.equal('Amount*')
        });
        airdrop.getAmountField().should('be.visible')
        airdrop.getAmountField().click().then(()=>{
            airdrop.getAmountField().should('be.enabled')
        })
    });

    it('Perfoming the AirDrop Functionality Using the wallet Address, Working fine or not!',function() {
        airdrop.getAirdropbutton().click()
        airdrop.getInputAddressField().type(this.wallets.airdropwallets)
        airdrop.getAmountField().type(1)
        airdrop.getSubmitButton().should('be.visible')
        airdrop.getSubmitButton().should('be.enabled')
        airdrop.getSubmitButton().click()
        cy.CriticalActionConfirm()
        
    });

    it('Perfoming the AirDrop-Action With Fraction Value of the Amount ', function() {
        airdrop.getAirdropbutton().click();
        airdrop.getInputAddressField().type(this.wallets.airdropwallets);
        airdrop.getAmountField().type(0.0034);
        airdrop.getSubmitButton().should('be.visible')
        airdrop.getSubmitButton().should('be.enabled')
        airdrop.getSubmitButton().click()
        cy.CriticalActionConfirm()

    });
    it('Perfoming the AirDrop-Action With Fraction having enought Zeros ', function() {
        airdrop.getAirdropbutton().click();
        airdrop.getInputAddressField().type(this.wallets.airdropwallets);
        airdrop.getAmountField().type(0.000000000000000001);
        airdrop.getSubmitButton().should('be.visible')
        airdrop.getSubmitButton().should('be.enabled')
        airdrop.getSubmitButton().click()
        cy.CriticalActionConfirm()

    });

    it('Perfoming the AirDrop Functionality Using the CSV File, Working fine or not!', function(){
        airdrop.getAirdropbutton().click()
        airdrop.getInputFileField().attachFile('Wallet_address_sendings.xls')
        airdrop.getAmountField().type(1)
        airdrop.getSubmitButton().should('be.visible')
        airdrop.getSubmitButton().should('be.enabled')
        airdrop.getSubmitButton().click()
        cy.CriticalActionConfirm()
    });

});