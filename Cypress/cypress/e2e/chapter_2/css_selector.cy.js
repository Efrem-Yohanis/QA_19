describe('css_selector',()=>{

    // id="APjFqb"
    // class="a4bIc"
    // name="q"
    

// class="input.gNO89b"
// name="input[name='btnK']"
// value="input[value='Google Search']"

// class=".gNO89b"
// name="[name='btnK']"
// value="[value='Google Search']"

    it('Test google',()=>{
        cy.visit("https://www.google.com")
        cy.get('#APjFqb')
        cy.get('.gNO89b')
        cy.get("[name='btnK']")

        cy.contains('Google ፍለጋ')
       
    })

    it.only('local url',()=>{
        cy.visit("http://127.0.0.1:5500/project1/form.html")
        cy.contains("First Page")
        cy.get('.text').find('h3')
        
       cy.get(".form-control")
       cy.get("#fname")
       cy.get("[name='firstname']")
       
       // tag is optional
       cy.get("textarea.form-control")
       cy.get("input#fname")
       cy.get("input[name='firstname']")

       
    })
})


