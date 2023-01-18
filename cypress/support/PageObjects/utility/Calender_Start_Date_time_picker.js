require('cypress-xpath')
class startdatepicker{

    getdatepicker(){
       return  cy.get("input[placeholder='Select start date']")
    }

    getCalender(){
        return cy.get("[class='react-datepicker']")
    }

    getnavigateBackButton(){
        return cy.get("button[aria-label='Previous Month']")
    }
    getnavigateForwardButton(){
        return cy.get("button[aria-label='Next Month']")
    }

    getMonthName(){
        return cy.get("[class='react-datepicker__current-month']")

    }

    getCalenderDays(){
        return cy.get("[class='react-datepicker__month']")

    }
    getDates(){
       return cy.xpath("//div[@class='react-datepicker__month']//div[@role='button' and not(contains(@class, 'react-datepicker__day--outside-month'))]")
    }
    getTime(){
        return cy.get("[class='react-datepicker__time-list']")
    }

    time_select(){

        return cy.get("[class='react-datepicker__time-list-item ']")
    }
}

export default startdatepicker 