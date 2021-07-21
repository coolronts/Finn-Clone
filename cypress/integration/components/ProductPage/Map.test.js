import React from "react"; <
reference types = "cypress" / > ;

describe("FinnKode Page renders", () => {
    beforeEach(() => {
        cy.visit("/product/3VeIBRB4zdO0L2dGAruzAH");
        cy.waitForReact();
    });

    it("should have rendered children", () => {
        cy.get('[data-cy="Maps"]').children().should("have.length", "3");
    });
});