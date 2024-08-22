/** @type {import('tailwindcss').Config} */
module.exports = {
  content:
  ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        chocolate: "#ff7628",
        slategray: "#6c7d93",
        gray: {
          "100": "#feffff",
          "200": "#fefefe",
          "300": "#202427",
          "400": "#192239",
          "500": "#202327",
          "600": "rgba(255, 255, 255, 0.01)",
          "700": "rgba(255, 255, 255, 0.2)",
        },
        silver: {
          "100": "#c4c4c4",
          "200": "rgba(196, 196, 196, 0)",
        },
        lavender: "#d8eaff",
        seashell: "#fbf1ec",
        honeydew: "#ebf7e9",
        snow: "#fcf8f8",
        aliceblue: {
          "100": "#f2f7fd",
          "200": "#f0f5fb",
          "300": "#eff4fa",
        },
        darkslategray: {
          "100": "#474747",
          "200": "#413f45",
        },
        whitesmoke: "#efefef",
        blueviolet: {
          "100": "rgba(132, 84, 245, 0.1)",
          "200": "rgba(132, 84, 245, 0.05)",
          "300": "rgba(132, 84, 245, 0.08)",
        },
        goldenrod: {
          "100": "rgba(254, 195, 95, 0.2)",
          "200": "rgba(254, 195, 95, 0.13)",
          "300": "rgba(254, 195, 95, 0.1)",
        },
      },
      spacing: {},
      fontFamily: {
        "open-sans": "'Open Sans'",
        paprika: "Paprika",
        roboto: "Roboto",
        "work-sans": "'Work Sans'",
        nunito: "Nunito",
      },
      borderRadius: {
        "81xl": "100px",
        "41xl": "60px",
        xl: "20px",
        "11xl": "30px",
      },
    },
    fontSize: {
      xl: "1.25rem",
      lg: "1.125rem",
      "11xl": "1.875rem",
      "29xl": "3rem",
      "5xl": "1.5rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
