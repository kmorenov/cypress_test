it('Navigate to localhost', () => {
    cy.visit('http://localhost:3000/')
    // cy.wait(3000)
    cy.get('#my-data-div').contains('delectus')
})

/*it('stub out ', () => {

    cy
        .server()
        .route('https://api.frontegg.com/test', [{ artifactName: 'fizzbuzz', artifactType: "GCAR" }]).as('am')
        .visit('http://localhost:3000/about')
        .wait('@am')

        .get('#my-data-div').contains('fizzbuzz')
})

it('mock one object', () => {

    cy
        .server()
        .route('https://jsonplaceholder.typicode.com/todos/1', { title: 'KM' }).as('reload')
        .visit('http://localhost:3000/home')
        .wait('@reload')

        .get('#my-data-div').contains('KM')
})*/

it('mock All Todos (array of objects)', () => {

    cy
        .server()
        .route('https://jsonplaceholder.typicode.com/todos', [{ title: 'KM' }, { title: 'SM' }]).as('rel')
        .visit('http://localhost:3000/todos')
        .wait('@rel')

        .get('#my-data-div').contains('KM')
})

it('mock All Todos (fixtures)', () => {

    cy
        .server()
        .route('https://jsonplaceholder.typicode.com/todos', 'fixture:mock_todo').as('rel')
        .visit('http://localhost:3000/todos')
        .wait('@rel')

        .get('#my-data-div').contains('KM')
})