require("dotenv").config();

/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config
    config.env.CONTENTFUL_SPACE_ID = process.env.REACT_APP_CONTENTFUL_SPACE_ID;
    config.env.CONTENTFUL_API_TOKEN = process.env.REACT_APP_CONTENTFUL_API_TOKEN;
    config.env.GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

    // do not forget to return the changed config object!
    return config;
};