import loc from "../locators/locators.js"
const data = require(`../fixtures/loginData.json`)


describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://sweetshop.netlify.app/')
    cy.get(loc.login_button).click()
    cy.get('#exampleInputEmail').type(data.email)
  })
})