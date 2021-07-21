import React from "react";

<reference types="cypress" />;

describe("List renders", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.waitForReact();
  });

  it("List should render", () => {
    cy.react("List").should("have.length", "1");
  });

  it("List should render initially 6 Cards without scrolling", () => {
    cy.react("Card").should("have.length", "6");
  });

  it("List should render 6 more Cards scrolling down", () => {
    cy.react("Card").eq(5).scrollIntoView({ duration: 2000 })
    cy.react("Card").should("have.length", 12);
  });
});
