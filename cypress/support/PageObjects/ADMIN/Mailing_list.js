import 'cypress-xpath'

export class mailing{

        getmailSection(){
           return  cy.get("a[href*='/reports/mailing-list']")
        }
        getassertTitle(){
            return cy.get('h3')
        }
        getTotalCountTable(){
            return cy.get("table[class*='mb-3']")
        }
        getTotalMemberOverallRow(){
            return  cy.get("table[class*='mb-3'] tr:nth-child(1) th")
        }
        getvalueofOverallMemeber(){
            return  cy.get("tr:nth-child(1) th")
        }
        getTotalMemberwithlocation(){
            return cy.get("tr:nth-child(2)")
        }
        getvalueOfMemberWithLocation(){
            return cy.get("tr:nth-child(2) th")
        }
        getPercentage_Memeber_without_location(){
            return cy.get("table[class*='mb-3'] tr:nth-child(3)")
        }
        getvalueofMember_Without_location(){
            return cy.get("tr:nth-child(3) th")
        }
        getDetailTable(){
            return cy.get("table[class*='w-full my-4']")
        }

        getColumnsOfDataTable(){
            return cy.get("table[class*='w-full my-4'] thead")
        }
        getdetailedcolumn1(){
            return cy.get('th:nth-child(1)')
        }
        getdetailedcolumn2(){
            return cy.get('th:nth-child(2)')
        }
        getdetailedcolumn3(){
            return cy.get('th:nth-child(3)')
        }
        getdetailedcolumn4(){
            return cy.get('th:nth-child(4)')
        }
        getovervalue(){
            return cy.get("table[class='mb-3'] tbody tr:nth-child(1) th")
        }
        getlocationvalue(){
            return cy.get("table[class='mb-3'] tbody tr:nth-child(2) th")
        }
        getpercentagevalue(){
            return cy.get("table[class='mb-3'] tbody tr:nth-child(3) th")
        }

}
