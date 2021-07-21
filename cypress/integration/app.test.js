import React from "react";

<reference types="cypress" />


describe('Home renders', () => {
  it('should render Home when route /',
    () => {
      cy.visit('/')
      cy.waitForReact();
      cy.react("Home").should("exist")
    }
  )

  it('should render ProductPage when route /product/id',
    () => {
      cy.visit('/product/3VeIBRB4zdO0L2dGAruzAH')
      cy.get("#ProductPage").should("exist")
    }
  )
})