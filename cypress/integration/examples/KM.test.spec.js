it('Navigate to localhost', () => {
    cy.visit('http://localhost:3000/about')
    cy.get('#my-data-div').contains('I am up and running!')
})

it('stub out ', function () {
    cy.visit('http://localhost:3000/about')

    cy.server()
    cy.route('https://api.frontegg.com/test', [{ artifactName: 'fizzbuzz', artifactType: "GCAR" }])

    cy.get('#my-data-div').contains('fizzbuzz')
})