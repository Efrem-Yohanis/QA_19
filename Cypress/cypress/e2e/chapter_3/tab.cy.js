describe("New Tab ",()=>{
 
    it.only("new tab example  ",()=>{

    cy.visit("http://127.0.0.1:5500/project/login.html")
    cy.get('#iun').type("craft")
    cy.get('.pass > input').type("12344")
    cy.get('div.btn1 > .btn > a').invoke('removeAttr','target').click()
    
    cy.xpath("//h1[normalize-space()='All Department']").should('have.text','All Department')

    cy.go('back')
    })
    

})