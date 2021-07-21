import React from "react";

<reference types="cypress" />;

describe("Choice renders", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.waitForReact();
  });

  it("Choice should render", () => {
    cy.react("Choice").should("have.length", "1");
  });

  it("Choice should render 2 children", () => {
    cy.react("Choice").children().should("have.length", "2");
  });

  it("Options should render 12 children", () => {
    cy.get("[data-cy=Options]").children().should("have.length", "12");
  });

  it("Button change color on hover", () => {
    cy.get("[data-cy=adContainer]")
      .find("button")
      .trigger("mouseover")
      .should("have.css", "background-color", "rgb(37, 99, 235)");
  });
});
