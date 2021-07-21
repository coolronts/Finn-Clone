import React from "react";

<reference types="cypress" />;

const id = "3VeIBRB4zdO0L2dGAruzAH";

describe("Product Page renders", () => {
  beforeEach(() => {
    cy.visit("/product/" + id);
  });

  it("should have rendered equal pictures", () => {
    cy.get('[alt="Carousel"]').should("have.length", 4);
  });

  it("should have showed first picture", () => {
    cy.get('[alt="Carousel"]').eq(0).should("be.visible");
  });

  it("clicking next button should have showed second picture", () => {
    cy.get(".swiper-button-next")
      .click()
      .get('[alt="Carousel"]')
      .eq(1)
      .should("be.visible");
  });

  it("clicking previous button should have showed first picture", () => {
    cy.get(".swiper-button-next").click();
    cy.get(".swiper-button-prev")
      .eq(1)
      .click()
      .get('[alt="Carousel"]')
      .eq(0)
      .should("be.visible");
  });
});
