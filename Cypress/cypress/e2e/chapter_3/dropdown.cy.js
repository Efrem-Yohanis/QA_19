describe("Dropdown example",()=>{
 
    it.only("static dropdown ",()=>{
        cy.visit("https://trytestingthis.netlify.app/",{ timeout: 60000 })
        cy.get('#option').select('Option 3').should("have.value","option 3")
        cy.get('#option').select('Option 3').then(($ele)=>{
            cy.log($ele.val())
        })
      
     
    })
    })