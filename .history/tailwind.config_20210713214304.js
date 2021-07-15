const colors = require("tailwindcss/colors");

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "indigo-lighter": "#F0F9FF",
                "indigo-dark": "#202e78",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};