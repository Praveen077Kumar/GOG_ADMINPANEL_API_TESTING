
import 'cypress-promise/register'
import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  

  