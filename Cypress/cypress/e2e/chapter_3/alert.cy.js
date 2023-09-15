describe("Alert example",()=>{
 
    it("Normal  Alert ",()=>{
   
    cy.visit("http://127.0.0.1:5500/project/login.html")
    cy.get('#iun').type("craft")
    cy.get('.pass > input').type("12344")
    cy.get('div.btn > .btn').click()

    cy.on('window:alert',($text)=>{
        expect($text).to.contain("Hello! You are succesfully login")
    })

    })

    it("Confrim Alert example 1 ",()=>{
   
        cy.visit("http://127.0.0.1:5500/project/about.html")

        cy.xpath("//button[@onclick='myFunction()']//span[@class='bi-person-x']").click()
    
        cy.on('window:confirm',($text)=>{
            expect($text).to.eq("Are you sure to delete the student info")
        }) 
        cy.xpath("//span[@id='result']").should('have.text','You pressed OK!')
        
        })

        it("Confrim Alert example 2 ",()=>{
   
            cy.visit("http://127.0.0.1:5500/project/about.html")
    
            cy.xpath("//button[@onclick='myFunction()']//span[@class='bi-person-x']").click()
        
            cy.on('window:confirm',() => false)
            cy.xpath("//span[@id='result']").should('have.text','You canceled!')
    
            })
    
            it.only("Prompt Alert ",()=>{
   
                cy.visit("http://127.0.0.1:5500/project/home.html")
        
                cy.window().then((win)=>{
                    cy.stub(win,'prompt').returns('craft')
                })

                cy.get(':nth-child(1) > a > img').click()
                
                cy.xpath("//span[@id='ans ']").should('have.text','craft')
                })

    

})