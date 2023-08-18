describe('xpath',()=>{
    it('xpath selector',()=>{
        cy.visit("https://www.google.com")
        cy.xpath("//textarea[@id='APjFqb']").type("hello world")
        cy.xpath("//div[@class='FPdoLc lJ9FBc']//input[@name='btnK']").click()
    })
   
    it.only("local url",()=>{

        cy.visit('http://127.0.0.1:5500/project1/form.html')
        cy.xpath("//input[@id='fname']").type("Efrem")
        cy.xpath("//input[@id='lname']").type("craft")
        cy.xpath("//input[@id='email']").type("efrem@craft.com")
        
    })
})