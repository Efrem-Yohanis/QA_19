describe('example intacting', ()=>{
  it('test case1',function (){

       //1. visit page => cy.visit("URL") //=> command or function bulit command
          cy.visit('http://127.0.0.1:5500/project1/form.html')
       //2. selecet element css cy.get(css selector #id .class [name=""]), cy.contains(hello), .find() and cy.xpath("//")
                // cy.get(#id1) => [one element]
                // cy.get(.form-control) => [element1, element2, element3].find()
            //cy.xpath("//input[@id='fname']")
                //cy.get('#fname')
      //3. intract with element 
              //cy.get('#fname').type("efrem")
              // button.click() 
              // inputfiled.type(), 
              // inputfiled.clear() check() 
              // uncheck()  selecet() option 
              cy.get('#fname').type("efrem")
              cy.get('#lname').type("jack")
              cy.get('#email').type("email@craft.com")
              cy.get('#password').type("123456789")
              cy.get('#Male').check()
              cy.get('#Femial').check()

              cy.get('#javaC').check()
              cy.get('#PythonC').uncheck()
              cy.get('#Cpp').uncheck()
              cy.get('#JavaScriptC').check()

              cy.get('#CountryS').select('Keya')
     //4. assertion comper actual value with expct vlaue

              cy.get('#fname').type("efrem")
              cy.get('#lname').type("jack")
              cy.get('#email').type("email@craft.com")
              cy.get('#password').type("123456789")
              cy.get('#Male').check()
              cy.get('#Femial').check()

              cy.get('#javaC').check()
              cy.get('#PythonC').uncheck()
              cy.get('#Cpp').uncheck()
              cy.get('#JavaScriptC').check()

              cy.get('#CountryS').select('Keya')
             //cy.get('#fname').type("efrem").should('have.value','efrem')
              // if the actual value equle with expect value test case pass
              // else test case faild

    })
})


