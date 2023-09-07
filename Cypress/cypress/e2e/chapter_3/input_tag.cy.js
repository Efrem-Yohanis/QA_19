describe("text verfication",()=>{
  
it("input tag ",()=>{
    cy.visit("http://shop.icraftsoft.net:8095/",{ timeout: 60000 })
    cy.get('.form-control').type("2345").should('have.value','2345')
    cy.get('.login-form-1 > form > [style="padding-left: 185px;"] > .btnSubmit').click()
    cy.get('strong > h3')
    .should('exist')
    .and('be.visible')
    .and('contain','Craft Online Shopping')
})

})