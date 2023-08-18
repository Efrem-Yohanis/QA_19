describe('Folder 1', function (){
  const URL= "https://www.google.com/"
  it('Test case 1',()=>{
    // TEST STEP
    cy.visit(URL)
    cy.log()

  }) 

  it.skip('Test case 2',()=>{
    // TEST STEP
    cy.visit('https://www.cnn.com/')

  }) 

  it('Test case 3',()=>{
    // TEST STEP
    cy.visit('https://www.amazon.com/')

  }) 

  it('Test case 4',()=>{
    // TEST STEP
    cy.visit('https://www.google.com/maps/@9.0079232,38.7678208,12z?entry=ttu')

  }) 
  
  it('Test case 5',()=>{
    // TEST STEP
    cy.visit('https://www.netflix.com/')

  }) 


  
})



  
  
