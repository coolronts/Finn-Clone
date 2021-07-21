import React from "react"; <
reference types = "cypress" / > ;

describe("FinnKode Page renders", () => {
    beforeEach(() => {
        cy.visit("/product/3VeIBRB4zdO0L2dGAruzAH");
        cy.waitForReact();
    });

    it("should have rendered 4 p", () => {
        cy.get('[data-cy="FinnKode"]').children().should("have.length", "4");
    });
});