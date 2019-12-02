it('Navigate to localhost', () => {
    cy.visit('http://localhost:3000/about')
})

it('stub out ', function () {
    cy.server()
    cy.route('GET', 'http://localhost:4000/',  { data : 'Mock data' })
    cy.visit('http://localhost:3000/about')
})