
context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://www.amazon.com')
        if(cy.contains("Don't Change"))
        {
            cy.xpath(".//div[@class='glow-toaster-footer']//input[@data-action-type='DISMISS']").click()
        }
    })

  it('Check the total displayed number of results for category Smart Home | Televisions', () => {
    cy.get("#nav-hamburger-menu").click()
    cy.wait(2000)
    cy.get('#hmenu-content > ul.hmenu.hmenu-visible > li:nth-child(9)').click()
    cy.get(".hmenu-visible > :nth-child(11) > .hmenu-item").click({force: true})
    cy.get('[alt="Smart Televisions"]').click({force: true})
    cy.get('.a-span4').its('length').then((number) => {
    cy.get(".a-box-inner > .a-color-base").should('contain', number)
          })
  })  

  it('Check filter by department in Deals and Promotions page', () => {
    cy.contains("Today's Deals").click()
    cy.get(".a-expander-extend-header").click()
    cy.xpath('//span[contains(text(),"Software")]').click()
    cy.get(".summary > .a-text-bold").invoke('text').then((text) => {
        expect(text.trim()).equal('Software')
    })
  })

  it('Check the selected currency displayed for the products', () => {
   cy.get(".icp-nav-link-inner > .nav-line-2").click()
   cy.get("#a-autoid-0-announce").click()
   cy.get("#icp-sc-dropdown_2").click()
   cy.get("#icp-btn-save").click()
   cy.get("#twotabsearchtextbox").type("television").type('{enter}')
   cy.get('.a-price-symbol').first().should('have.text', 'AED')    
  })

  it('Check Product Details Page', () => {
    cy.get('#twotabsearchtextbox').click().get('#searchDropdownBox').select('Electronics',{force: true})  
    cy.get('#twotabsearchtextbox').type("Apple").type('{enter}')
    cy.get('.a-price-whole').first().click()
    cy.get('.tabular-buybox-text').first().should('have.text','Amazon')

    cy.xpath("//*[@id='availability']/span").invoke('text').then((text) => {
                if (text.trim() === "In Stock.") {
                    cy.get('#price_inside_buybox').invoke('text').as("cart").then((cart)=>{
                        cy.get('#add-to-cart-button').click()
                        cy.get(".huc-subtotal > .a-text-bold").first().should('have.text',cart.trim())
                    }) 
                }
                else
                {cy.log(`**ADD TO CART button not available**`) }
            })
  })
})