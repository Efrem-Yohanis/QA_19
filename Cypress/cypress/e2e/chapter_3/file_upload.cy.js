describe("Dropdown example",()=>{
 
    it.only("static dropdown ",()=>{
    const f = 'mux.jpg';
    cy.visit("http://the-internet.herokuapp.com/upload")
    cy.get('#file-upload').attachFile(f)
    cy.get('#file-submit').click()
    cy.get('#uploaded-files').should('contain','mux.jpg')
    })
    

})