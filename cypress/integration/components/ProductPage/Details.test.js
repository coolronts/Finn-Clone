import React from "react"; <
reference types = "cypress" / > ;

describe("Details Page renders", () => {
    beforeEach(() => {
        cy.visit("/product/3VeIBRB4zdO0L2dGAruzAH");
        cy.waitForReact();
    });

    it("should have rendered Details", () => {
        cy.get('[data-cy="Details"]').should("exist");
    });
  
    it("should have rendered Oslo and Place", () => {
      cy.react("Details").children("p").should(($p) => {
        expect($p).to.have.length(4)
        expect($p[0]).to.have.text("Super central, nice and cozy apartment (2) ")
        expect($p[1]).to.have.text(" Oslo ")

      })
    });

});