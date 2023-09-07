describe("Check Box and Raido  Example",()=>{
 
it.only("Check Box and Raido ",()=>{
    cy.visit("https://trytestingthis.netlify.app/",{ timeout: 60000 })
    cy.get('#male').check().should("be.checked")
    cy.get('#female').should("not.be.checked")
    cy.get('[name="option1"]').check().should("be.checked")
    cy.get('[name="option2"]').check().should("be.checked")
  
 
})
})