///<reference types="cypress"/>

describe("checking the Your store demo site",()=>{
    beforeEach("open the website ",()=>{
        cy.login()
    })
    it("validate that adding a product function works properly",()=>{
        cy.get(".nav-link").contains("Catalog").click({force: true})
        cy.get('[href="/Admin/Product/List"]').click({force:true})
        cy.get('[href="/Admin/Product/Create"]').click({force: true})
        cy.get("#Name").type("Laptop123",{force: true})
        cy.screenshot({capture:"runner"})
        cy.get('[class="k-multiselect-wrap k-floatwrap"]').first().click({force:true}).get('[role="option"]').contains('Computers').click({force: true})
        cy.get('[class="k-numeric-wrap k-state-default"]').parent('[class="k-widget k-numerictextbox"]').parent('.col-md-9').parent("#product-price-area").type('3000')
        cy.get('[class="btn btn-primary"]').get('[name="save"]').click()
        cy.get('[class="alert alert-success alert-dismissable"]').should('contain','The new product has been added successfully.')

    })
    
    it("validate that the search functionality works properly",()=>{
        cy.searchForAProduct()
        cy.get("#products-grid").should('be.visible')
    })
    it("validate that deleting a product function works properly",()=>{
        
        cy.searchForAProduct()
        cy.wait(1500)
        cy.get('[class="mastercheckbox"]').first().click({force: true})
        cy.get("#delete-selected").click({force: true})
        cy.wait(1500)
        cy.get("#delete-selected-action-confirmation-submit-button").click()
        cy.get('[class="btn btn-primary float-right"]').parent(".modal-footer").contains("Yes").click({force:true})
        cy.wait(1500)
        cy.get('[class="dataTables_empty"]').should('contain',"No data available in table")
    })
    

})





