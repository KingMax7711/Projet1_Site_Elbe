/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./html/*.html"],
    theme: {
        extend: {
            colors: {
                BGprimary: "#39393E",
                BGsecondary: "#424549",
                ACprimary: "#7289DA",
                ACprimary_active: "#53649E",
                ACsecondary: "#334995 ",
                ACsecondary_active: "#23336A ",
                disabled: "#4A4D57 ",
            },
            fontFamily: {
                Poppins: ["Poppins", "sans-serif"],
            },
        },
    },
    plugins: [],
};
