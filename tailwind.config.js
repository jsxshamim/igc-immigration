/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        container: {
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "6rem",
                xl: "8rem",
                "2xl": "10rem",
            },
        },
        extend: {
            colors: {
                primary: "#ED2124",
                secondary: "#2C3F69",
                paragraph: "#343434",
            },
            backgroundColor: {
                primary: "#ED2124",
                secondary: "#2C3F69",
            },
        },
    },
    plugins: [],
};
