describe('async',()=>{
    it('asyc example',()=>{
        cy.visit('https://www.google.com/');
        cy.get('.lnXdpd');
        cy.wait(10000).then(()=>{
            console.log('Test finshed ..+++++..........+++++++++.....!')
        })
        
    })
})