///<reference types='cypress' />

const admindata = require("../../support/PageObjects/ADMIN/admin_login");
describe('LOGIN Panel Functionality', function(){
    this.beforeEach(()=>{
        cy.viewport(1600,900)
    })

    it('Checking Login to Admin Panel With Wrong Username & Password', function() {

        cy.visit(Cypress.env("host"))
        admindata.getUsername().should('be.visible').type('wrongusername')
        admindata.getPassword().should('be.visible').type('wrongpassword')
        admindata.getLoginbtn().should('be.enabled').click()
        admindata.errorLoginMsg().should('be.visible')

        
    });
    it('Checking Login to Admin Panel With Wrong Password', function() {
        cy.visit(Cypress.env("host"))
        admindata.getUsername().should('be.visible').type(Cypress.env('username'))
        admindata.getPassword().should('be.visible').type('wrongpassword')
        admindata.getLoginbtn().should('be.enabled').click()
        admindata.errorLoginMsg().should('be.visible')

    });
    it('Checking Login to Admin Panel With Wrong Username', function() {
        cy.visit(Cypress.env("host"))
        admindata.getUsername().should('be.visible').type('ADMINDATA')
        admindata.getPassword().should('be.visible').type(Cypress.env('password'))
        admindata.getLoginbtn().should('be.enabled').click()
        admindata.errorLoginMsg().should('be.visible')
    });
    it('Checking Login to Admin Panel With Case-insensitive Username Field', function() {
        cy.visit(Cypress.env("host"))
        admindata.getUsername().should('be.visible').type('ADMIN')
        admindata.getPassword().should('be.visible').type(Cypress.env('password'))
        admindata.getLoginbtn().should('be.enabled').click()
        admindata.AfterLoginFieldCheck().should('be.visible')
    });
    it(' Checking Login to Admin Panel With Exact Credentials', function() {
        cy.visit(Cypress.env("host"))
        admindata.getUsername().should('be.visible').type(Cypress.env('username'))
        admindata.getPassword().should('be.visible').type(Cypress.env('password'))
        admindata.getLoginbtn().should('be.enabled').click()
        admindata.AfterLoginFieldCheck().should('be.visible')
    });

    it('Checking the LOGOUT Functionality Working Fine OR NoT!',()=>{
        cy.visit(Cypress.env("host"))
        admindata.getUsername().should('be.visible').type(Cypress.env('username'))
        admindata.getPassword().should('be.visible').type(Cypress.env('password'))
        admindata.getLoginbtn().should('be.enabled').click()
        admindata.getLogOutAdmin().should('be.visible').click()
    })





})