import 'cypress-xpath'

export class datesselect {

getdatepicker1(){
    return cy.get("input[placeholder='Select start date']")
}
getdatepicker2(){
    return cy.get("input[placeholder='Select finish date']")
}

getcalender1(){
  return   cy.get('.react-datepicker__month-container')
}
getnavigateBackButton1(){
    return cy.get("button[aria-label='Previous Month']")
}


getMonthName1(){
    return cy.get("[class='react-datepicker__current-month']")

}
getCalenderDays1(){
    return cy.get("[class='react-datepicker__month']")

}
getDates1(){
    return cy.xpath("//div[@class='react-datepicker__month']//div[@role='button' and not(contains(@class, 'react-datepicker__day--outside-month'))]")
 }

 getreporttype(){
     return cy.get("div[class='col-span-12 pb-6'] select[class='w-full']")
 }
 getreportmenubutton(){
     return cy.get('[href="/reports"]')
 }
 getallocatedOrderDrop(){
     return cy.get("select[name='pageUrl']")
 }
getreportbutton(){
    return cy.get("button[type='submit']")
}
getassetReport(){
    return cy.get("div[class='col-span-12 pb-6'] select[class='w-full']")
}
}


export class Primarysales{
    getIntoReportSection(){
        return cy.xpath("//a[normalize-space()='Primary Sales Report']")
    }
    getSectionName(){
        return cy.get("[class*='col-span-12 py-4'] h1")
    }
    getreportTypeText(){
        return cy.get("[class*='col-span-12 pb-6'] label")
    }

    getdropName(){
        return cy.get("[class*='col-span-12'] label[for='drop']")
    }

    getStartDate(){
        return cy.get("[class*='col-span-12'] label[for='startDate']")
    }

    getFinishDate(){
        return cy.get("[class*='col-span-12'] label[for='finishDate']")
    }
    getdownloadButton(){
        return cy.get("button[type='submit']")
    }

    getReportTypecolumn(){
        return cy.get('label[for="reportType"]')
    }
    getReportSectionName(){
        return cy.get('[class="text-2xl"]')
    }
}

