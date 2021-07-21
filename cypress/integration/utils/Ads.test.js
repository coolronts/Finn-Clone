import React from "react"; <
reference types = "cypress" / > ;

describe("Product Page renders", () => {
    beforeEach(() => {
        cy.visit("/product/3VeIBRB4zdO0L2dGAruzAH");
        cy.waitForReact();
    });

    it("should have rendered Ads", () => {
        cy.get('[data-cy="Ads"]').should("exist");
    });

    it("should have extended when click and hide when click", () => {
        cy.get('[alt="downArrow"]').click();
        cy.get('[data-cy="extendedText"').should("be.visible")
        cy.get('[alt="downArrow"]').click();
        cy.get('[data-cy="extendedText"').should("not.be.visible")

    });
  

});