///<reference types='cypress' />

export class Media{

    get_media(){

        return cy.get('[href="/media"]')
    }
    getaddmedia(){
        return cy.get("a[href='/media/upload']")
    }
    getinputfile(){
        return cy.get("input[type='file']")
    }
    getuploadbutton(){
        return cy.get("button[type='submit']")
    }

    getSectionName(){
        return cy.get('[class="text-2xl pb-2"] ')
    }

    getAddFileButton(){
        return cy.get('[class="ml-auto"] span')
    }
    getAddFileButtonText(){
        return cy.get('[class="ml-auto"] span a')
    }
    getCardByteSize(){
        return cy.get(".rounded > .px-2 > .text-gray-400")
    }
    getCardcopyLinkbutton(){
        return cy.get(".rounded > .px-2 > .inline-block")
    }

}