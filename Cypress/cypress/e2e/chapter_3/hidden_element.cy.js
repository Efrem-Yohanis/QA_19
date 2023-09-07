describe("hidden Example",()=>{
 
it("input tag ",()=>{
    cy.visit("https://www.amazon.com/",{ timeout: 60000 })
    cy.xpath("//div[@id='nav-flyout-ya-signin']//span[@class='nav-action-inner'][normalize-space()='Sign in']").as('he')
     cy.get('@he').should('exist').and('not.be.visible')
     cy.get('@he').invoke('show')
     cy.get('@he').click({force: true})
    
    // cy.get('#ap_email').type('demo43@craft.com').should('have.value',"demo43@craft.com")
    // cy.get('.a-button-inner > #continue').click({force: true})
  
})

})