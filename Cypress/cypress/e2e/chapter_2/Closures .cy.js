// 
describe('example intacting', ()=>{
    it('test case1',function (){
  
        
            cy.visit('http://127.0.0.1:5500/project1/form.html')
             
             // closeres
            
            cy.xpath("//h1[@class='text-center mt-3']").then(($s)=>{
                     cy.log($s)
            })

          cy.get('h3.text-center').then(($elm)=>{
              const elem = $elm
              elem.text()
          })
           
          
          

      })
  })
  
  
  