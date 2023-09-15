import { forEach } from "cypress/types/lodash"

describe("Dropdown example",()=>{
 
    it("static dropdown ",()=>{
        cy.visit("https://trytestingthis.netlify.app/",{ timeout: 60000 })
        cy.get('#option').select('Option 3').should("have.value","option 3")
        cy.get('#option').select('Option 3').then(($ele)=>{
            cy.log($ele.val())
        })
     })

    it("Daynamic dropdown example 1",()=>{
        cy.visit("https://www.wikipedia.org/")
        cy.get('#searchInput').type('ethio')
        cy.get(".suggestion-title")
        .should("length",6)
        .and('contain','Ethiopia')
    })

    it("Daynamic dropdown example 2",()=>{
        cy.visit("https://www.wikipedia.org/")
        cy.get('#searchInput').type('ethio')
        cy.get(".suggestion-title").each(($elm,index,$list)=>{
            if( $elm.text() === 'Ethiopia')
            {
                $elm.click()
            }
        })
        
    })
    

    })
    