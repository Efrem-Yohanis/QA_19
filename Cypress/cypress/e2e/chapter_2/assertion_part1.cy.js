describe('example intacting', ()=>{
    it('assertion on url',function (){
            cy.visit('http://127.0.0.1:5500/project1/form.html')
            cy.url().should('eq','http://127.0.0.1:5500/project1/form.html')
            .and('include','/project1/form.html')
            .and('contain','/project1/form.html') 
      })
    it('assertion on h3',()=>{
        cy.visit('http://127.0.0.1:5500/project1/form.html')
        cy.get('h2.text-center').should('exist')
        .and('have.text','Registration Form')
        cy.get('#fname').should('exist').should('not.be.visible')
    })
  })
  
  
  