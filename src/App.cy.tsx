/// <reference types="cypress" />

import App from "./App";

describe("<App />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />);

    // click button
    cy.get("button").click();

    // expect count to be 1
    cy.get("button").contains("count is 1");
  });

  it("matches snapshot", () => {
    cy.mount(<App />);

    cy.matchImageSnapshot("app");
  });
});
