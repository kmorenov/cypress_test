// it('Navigate to localhost', () => {
//     cy.visit('http://localhost:3000/about')
// })
describe('App init', () => {
    it('stub out ', () => {
        cy.server()
        cy.route('GET', 'http://localhost:4000/', [{data: 'Mock data'}])
        cy.visit('http://localhost:3000/about')
    })
})