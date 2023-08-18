describe('visit command',()=>{
    const URL= "https://www.google.com"
    const url1= "https://www.cnn.com/"
    const url2= "https://www.amazon.com/"
    const url3= "https://www.google map.com "
    const url4= "https://www.netflix.com/" 
    it('open google',()=>{
        cy.visit("https://www.google.com");
    })

    it.skip('by using var',()=>{
        cy.visit(URL);
    })

    it('open CNN',()=>{
        cy.visit("https://www.cnn.com/");
    })

    it('open Amazon',()=>{
        cy.visit("https://www.amazon.com/");
    })

    it('open netflix',()=>{
        cy.visit("https://www.netflix.com/");
    })

})