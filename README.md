# End-to-End Testing with Cypress

## Topics

- Install and configure Cypress
- Write End-to-End tests with Cypress

## Installing Cypress

`npm install -g cypress`

to install locally

`npm install cypress --save-dev`

Add the script to `package.json`

`"cypress": "cypress open -P ."`

Add `cypress.json` to the project with the following content:

```json
{
  "baseUrl": "http://localhost:3000",
  "viewportWidth": 1280,
  "viewportHeight": 1200
}
```

- Delete the exercise files in the `cypress/integration/` folder

## Create Tests

### Test template

```js
describe('Some Functionality', () => {

  it "should test something", () => {

  }

  it "should test something", () => {

  }

})
```

- it "submits a todo tweet"

  - Visit the homepage
  - Type in a todo in the text area
  - Click on the submit button
  - Verify that the todo has been added

  - cy.visit, cy.get, contains, find, should, have.attr, first

- it "does not submit a new tweet when empty"

- it "does not submit a new tweet when over 140 characters"
