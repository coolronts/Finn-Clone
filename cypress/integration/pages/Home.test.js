import React from "react";

<reference types="cypress" />;

describe("Home renders", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.waitForReact();
  });

  it("Home should render Header", () => {
    cy.react("Header").should("have.length", "1");
  });

  it("Home should render Highlight", () => {
    cy.react("Highlight").should("have.length", "1");
  });

  it("Home should render SearchBar", () => {
    cy.react("SearchBar").should("have.length", "1");
  });

  it("Home should render Choice", () => {
    cy.react("Choice").should("have.length", "1");
  });

  it("Home should render List", () => {
    cy.react("List").should("have.length", "1");
  });

  it("Home should render Picture", () => {
    cy.get('[alt="Hero"]')
      .should("be.visible")
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });
});
