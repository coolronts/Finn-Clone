import React from "react";

<reference types="cypress" />;

var details;
const id = "3VeIBRB4zdO0L2dGAruzAH";
const CONTENTFUL_SPACE_ID = Cypress.env("CONTENTFUL_SPACE_ID");
const CONTENTFUL_API_TOKEN = Cypress.env("CONTENTFUL_API_TOKEN");

describe("Product Page renders", () => {
  beforeEach(() => {
    cy.visit("/product/" + id);
    cy.waitForReact();
  });

  it("should have rendered PictureCarousel", () => {
    cy.get('[data-cy="pictureCarousel"]').should("exist");
  });

  it("should have rendered favoriteContainer", () => {
    cy.get('[data-cy="favoriteContainer"]').should("exist");
  });

  it("should have rendered Details", () => {
    cy.get('[data-cy="Details"]').should("exist");
  });

  it("should have rendered Maps", () => {
    cy.get('[data-cy="Maps"]').should("exist");
  });

  it("should have rendered smallCarousel", () => {
    cy.get('[data-cy="smallCarousel"]').should("exist");
  });

  it("should have rendered Ads", () => {
    cy.get('[data-cy="Ads"]').should("exist");
  });

  it("should have rendered FinnKode", () => {
    cy.get('[data-cy="FinnKode"]').should("exist");
  });

  it("should have rendered List", () => {
    cy.get('[data-cy="List"]').should("exist");
  });
});
