describe('subject Mangement', ()=>{
    it('finding button',function (){
        
        cy.visit("http://127.0.0.1:5500/project1/home.html")

       
        cy.get('.as-table').find("tbody>tr").first().find('td').first().find("button").as('b')
        
        cy.get('@b')
      })
  })
  
  
  