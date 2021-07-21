import React from "react";

<reference types="cypress" />;

describe("Card renders", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.waitForReact();
    cy.react("Card").eq(1).scrollIntoView({ duration: 2000 });
  });

  it("Card should render", () => {
    cy.react("Card").should("exist");
  });

  it("Card should render Picture", () => {
    cy.get('[alt="CardMainPicture"]')
      .should("be.visible")
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });

  it("Card should have info", () => {
    cy.get('[data-cy="Card-textContainer"]').should("be.visible");
  });

  it("Card should have Dash, which can be clicked to show popUp", () => {
    cy.get('[data-cy="Dash"]')
      .eq(3)
      .click()
      .get('[data-cy="popUp"]')
      .should("be.visible");
  });

  it("Card should have popUp, which can be clicked to hide popUp", () => {
    cy.get('[data-cy="Dash"]')
      .eq(3)
      .click()
      .get('[data-cy="popUp"]')
      .eq(3)
      .click()
      .get('[data-cy="popUp"]')
      .should("not.be.visible");
  });

  it("Card should have like, which can be clicked to show Modal", () => {
    cy.get('[data-cy="likeButtonContainer"]').eq(3).click()
    .get('[data-cy="Modal"]').should("be.visible");
  });

  it("Modal can be clicked to hide modal", () => {
    cy.get('[data-cy="likeButtonContainer"]').eq(3).click()
    .get('[data-cy="modalCancelButton"]').click().get('[data-cy="Modal"]').should("not.be.exist");
    cy.get('[data-cy="Card"]').should("be.exist");
  });
});
