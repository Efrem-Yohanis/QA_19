describe("text verfication",()=>{
   
it("checking text 1",()=>{
    cy.visit("http://127.0.0.1:5500/project1/form.html")
    cy.get('h1.text-center')
    .should('exist')
    .and('be.visible')
    .and('contain','First Page')
})

it("checking text 2",()=>{
    cy.visit("http://shop.icraftsoft.net:8095/",{ timeout: 60000 })
    cy.get('.form-control').type("2345")
    cy.get('.login-form-1 > form > [style="padding-left: 185px;"] > .btnSubmit').click()
    cy.get('strong > h3')
    .should('exist')
    .and('be.visible')
    .and('contain','First Page')
})








})

