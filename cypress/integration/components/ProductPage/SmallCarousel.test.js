import React from "react";

<reference types="cypress" />;

const id = "3VeIBRB4zdO0L2dGAruzAH";

describe("Small Carousel Page renders", () => {
  beforeEach(() => {
    cy.visit("/product/" + id);
  });

  it("should have rendered 10 cards", () => {
    cy.get('[data-cy="smallCard"]').should("have.length", 10);
  });

  it("should have showed first three slides", () => {
    cy.get('[data-cy="smallCard"]').eq(0).should("be.visible")
    cy.get('[data-cy="smallCard"]').eq(1).should("be.visible")
    cy.get('[data-cy="smallCard"]').eq(2).should("be.visible")
    cy.get('[data-cy="smallCard"]').eq(3).should("not.be.visible")
    cy.get('[data-cy="smallCard"]').eq(4).should("not.be.visible")
    cy.get('[data-cy="smallCard"]').eq(5).should("not.be.visible")
    cy.get('[data-cy="smallCard"]').eq(6).should("not.be.visible")
    cy.get('[data-cy="smallCard"]').eq(7).should("not.be.visible")


  });

  it("clicking next button should have showed next 3 slides", () => {
    cy.get(".swiper-button-next").scrollIntoView().click()
    cy.get('[data-cy="smallCard"]').eq(0).should("not.be.visible")
    cy.get('[data-cy="smallCard"]').eq(1).should("be.visible")
    cy.get('[data-cy="smallCard"]').eq(2).should("be.visible")
    cy.get('[data-cy="smallCard"]').eq(3).should("be.visible")
    cy.get('[data-cy="smallCard"]').eq(4).should("not.be.visible")
    cy.get('[data-cy="smallCard"]').eq(5).should("not.be.visible")
    cy.get('[data-cy="smallCard"]').eq(6).should("not.be.visible")
    cy.get('[data-cy="smallCard"]').eq(7).should("not.be.visible")
  });

  it("clicking previous button should have showed first three slides", () => {
    cy.get(".swiper-button-next").scrollIntoView().click();
    cy.get(".swiper-button-prev").eq(1).click();
    cy.get('[data-cy="smallCard"]').eq(0).should("be.visible")
    cy.get('[data-cy="smallCard"]').eq(1).should("be.visible")
    cy.get('[data-cy="smallCard"]').eq(2).should("be.visible")
    cy.get('[data-cy="smallCard"]').eq(3).should("not.be.visible")
    cy.get('[data-cy="smallCard"]').eq(4).should("not.be.visible")
    cy.get('[data-cy="smallCard"]').eq(5).should("not.be.visible")
    cy.get('[data-cy="smallCard"]').eq(6).should("not.be.visible")
    cy.get('[data-cy="smallCard"]').eq(7).should("not.be.visible")

  });
});
