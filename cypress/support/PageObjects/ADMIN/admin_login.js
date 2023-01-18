class admin{


    getUsername(){
        return cy.get("input[name='username']")
    }
    getPassword(){
        return cy.get("input[name='password']")
    }
    getLoginbtn(){
        return cy.get("button[type='submit']")
    }
    errorLoginMsg(){
        return cy.get('.mt-2')
    }
    AfterLoginFieldCheck(){
        return cy.get('.container > .flex')
    }
    getLogOutAdmin(){
        return cy.get("nav button")
    }
}



module.exports = new admin();

