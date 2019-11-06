describe('Todos', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('todo input has the focus', () => {
    cy.get('#todo-input').should('have.focus');
  });

  it('should have a new todo input value', () => {
    cy.get('#todo-input')
      .type('Get a coffee')
      .should('have.value', 'Get a coffee');
  });

  it('should display an error message when input is empty', () => {
    cy.get('#todo-input').type('{enter}');
  });

  context('Todos operations', () => {
    it('adds a new todo to the list', () => {
      cy.server(); // enable response stubbing
      cy.route({
        method: 'POST', // Route all GET requests
        url: '/api/todos', // that have a URL that matches '/users/*'
        response: {
          msg: 'Todo has been added',
        }, // and force the response to be: []
      });

      cy.get('#todo-input')
        .type('Get a coffee')
        .type('{enter}');

      cy.get('.list-group-item')
        .should('have.length', 2)
        .and('to.contain', 'Get a coffee');

      cy.get('#todo-input').should('have.value', '');
    });

    it('Deletes a todo', () => {
      cy.server();
      cy.route({
        method: 'DELETE',
        url: '/api/todos/1',
        response: {
          msg: 'todo is deleted',
        },
      });

      cy.get('.remove-todo')
        .first()
        .click();

      cy.get('.list-group li')
        .should('have.length', 0)
        .and('to.not.contain', 'Walk the Dog');

      // or
      // cy.contains('label', 'Walk the Dog')
      //   .should('not.be.visible')
    });
  });
});
