import React from "react";

<reference types="cypress" />;

describe("Highlight renders", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.waitForReact();
  });

  it("Highlight should render", () => {
    cy.react("Highlight").should("have.length", "1");
  });
    
  it("Highlight should render left Container", () => {
    cy.get("[data-cy=left-Container]").should("exist");
  });

  it("Highlight should render right Container", () => {
    cy.get("[data-cy=right-Container]").should("exist");
  });

  it("Highlight should render four ads", () => {
    cy.get("[data-cy=ad]").should("have.length", 4);
  });

  it("Four ads should have image", () => {
    cy.get("[data-cy=ad-image]").should("have.length", 4);
  });

  it("Four ads should have info", () => {
    cy.get("[data-cy=ad-info]").should("have.length", 4);
  });
});
