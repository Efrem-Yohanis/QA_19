describe("comman assertion",()=>{
    it("have.length",()=>{
        cy.visit("http://127.0.0.1:5500/project1/home.html")
        cy.get('.as-table').find("tbody>tr").should("have.length",2)
        cy.get('.as-table').find("tbody>tr").find('td').should("have.length",4)
    })
    it("have.class",()=>{
        cy.visit("http://127.0.0.1:5500/project1/home.html")
        cy.get('.as-table').should("have.class",'as-table')
    })

    it("have.value",()=>{
        cy.visit("http://127.0.0.1:5500/project1/form.html")
        cy.get('#fname').type("Efrem").should("have.value","Efrem")
        //.should("have.value","abcd")
        
    })
    it("contain",()=>{
        cy.visit("http://127.0.0.1:5500/project1/form.html")
        cy.get('h1.text-center').should("contain","First Page")
    })

    it("be.checked",()=>{
        cy.visit("http://127.0.0.1:5500/project1/form.html")
        cy.get('#Male').should("not.be.checked")
        cy.get('#Femial').should("be.checked")
    })
})