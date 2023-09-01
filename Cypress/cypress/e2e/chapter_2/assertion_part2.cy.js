describe("Explicity Assertion",()=>{
    // expect("Actual Value").to.equal("Expect Value")
    it('Expect on url',function (){
        cy.visit('http://127.0.0.1:5500/project1/form.html')

        cy.url().then(($url)=>{
            expect($url).to.eq('http://127.0.0.1:5500/project1/form.html')
        })
        
        cy.url().then(($url)=>{
            expect($url).to.include('/project1/form.html')
        })

        cy.url().then(($url)=>{
            expect($url).to.contain('/project1/form.html')
        })
        
  })
    it("Expect Example2",()=>{
       
        cy.visit('http://127.0.0.1:5500/project1/form.html')

        cy.get('h1.text-center').then(($sub)=>{
              expect($sub).to.exist
        })

        cy.get('h1.text-center').then(($sub)=>{
            expect($sub).to.be.visible
        })
         cy.get('h1.text-center').then(($sub)=>{
            expect($sub.text()).to.eq("First Page")
         }) 
    })
    
    // assert.equal("Actual Value","Expect Value")
    it("Assert Example",()=>{
       
        cy.visit('http://127.0.0.1:5500/project1/form.html')

         cy.get('h1.text-center').then(($sub)=>{
            const Actual_Value = $sub.text()
            cy.log(Actual_Value)
            const Expect_Value = "First Page"

            assert.equal(Actual_Value,Expect_Value)
         }) 
    })
    
})