///<reference types='cypress'/>

import startdatepicker from "../utility/Calender_Start_Date_time_picker";
import finishdatepicker from "../utility/Calender_Finish_Date_time_picker";

var data

beforeEach(()=>{
   cy.fixture('Create_drop.json').then(function (date){
       data = date
   })
})

 export function startcalender()  {

    var Pickerpage= new startdatepicker()
        Pickerpage.getdatepicker().click()
        Pickerpage.getCalender().click()
        Pickerpage.getCalender().should('be.visible')
        cy.selectMonth(data.startmonth)
        cy.selectDay(data.startdate)
        cy.selectTime(data.starttime)
      }

 export function finishcalender() {
    var  Pickerpage1 = new finishdatepicker()
         Pickerpage1.getdatepicker().click()
         Pickerpage1.getCalender().click()
         Pickerpage1.getCalender().should('be.visible')

         cy.selectMonth(data.finishmonth)
         cy.selectDay(data.finishdate)
         cy.selectTime(data.finishtime)

 }