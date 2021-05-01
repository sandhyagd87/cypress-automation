


// it('currency verification', () => {
//     cy.visit('http://www.amazon.com')
//     cy.get("#nav-hamburger-menu").click()
// //cy.get(".hmenu-visible > :nth-child(9) > .hmenu-item > .nav-sprite").click()
//     cy.xpath('//a[@data-menu-id="7"]').click()

// })  


// it('Software products', () => {
//     cy.visit('http://www.amazon.com')
//     cy.contains("Today's Deals").click()
//     cy.get(".a-expander-extend-header").click()
//     cy.xpath('//span[contains(text(),"Software")]').click()
//     cy.get(".summary > .a-text-bold").invoke('text').then((text) => {
//         expect(text.trim()).equal('Software')
//     })
// })

// it('currency verification', () => {
//     cy.visit('http://www.amazon.com')
//    cy.get(".icp-nav-link-inner > .nav-line-2").click()
//    cy.get("#a-autoid-0-announce").click()
//    cy.get("#icp-sc-dropdown_2").click()
//    cy.get("#icp-btn-save").click()
//    cy.get("#twotabsearchtextbox").type("television").type('{enter}')
//    cy.get('.a-price-symbol').first().should('have.text', 'AED')    
// })

it('cart', () => {
    cy.visit('http://www.amazon.com')
    cy.get("#twotabsearchtextbox").type("Apple").type('{enter}')
//    cy.get('.a-price-symbol').first().should('have.text', 'AED')    
cy.get('[cel_widget_id="MAIN-SEARCH_RESULTS-1"]').click()
})

