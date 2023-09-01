describe('example intacting', ()=>{
    it('test case1',function (){
  
            cy.visit('http://shop.icraftsoft.net:8095/?')

            // go to regis page
              cy.xpath("//input[@value='Register']").click()
            
            // regis page
          
        

              cy.get(':nth-child(2) > .form-control').as('u')
              
              cy.get('@u').type("demo32")
              cy.get(':nth-child(3) > .form-control').as('email')
              cy.get('@email').type("demo32@craft.com")
              cy.xpath("//input[@value='Register']").click()

            // go to login page

             cy.xpath("//input[@value='Login']").click()
           
            // on login page

            cy.get('.form-control').type("2878")
            cy.xpath("//input[@value='Login']").click()
            

            // home page element intraction.
      })
  })
  
  
  