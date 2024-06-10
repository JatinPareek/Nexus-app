/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fbfcff",
          "200": "#1a1a1a",
          "300": "rgba(255, 255, 255, 0.12)",
          "400": "rgba(255, 255, 255, 0.24)",
          "500": "rgba(255, 255, 255, 0.16)",
          "600": "rgba(255, 255, 255, 0.6)",
          "700": "rgba(255, 255, 255, 0.3)",
          "800": "rgba(45, 30, 29, 0.08)",
        },
        d48: "#252d48",
        a3bae: "#1a3bae",
        ffffff: "#fff",
        ced7: "#39ced7",
        darkslategray: {
          "100": "#333",
          "200": "rgba(37, 45, 72, 0.08)",
          "300": "rgba(37, 45, 72, 0.7)",
        },
        f5f6ff: "#f5f6ff",
        lavender: "#edefff",
        lightslategray: {
          "100": "#9ca3b9",
          "200": "#888b97",
        },
        azure: "#eefbfc",
        black: "#000",
        slategray: "#545d7f",
        gainsboro: {
          "100": "#d9d9d9",
          "200": "rgba(230, 230, 230, 0.12)",
        },
        slateblue: {
          "100": "rgba(26, 59, 174, 0.24)",
          "200": "rgba(26, 59, 174, 0.2)",
        },
      },
      spacing: {},
      fontFamily: {
        degular: "Degular",
      },
      borderRadius: {
        "981xl": "1000px",
        "43xl": "62px",
        "12xs": "1px",
        "21xl": "40px",
        xl: "20px",
        "39xl": "58px",
        "81xl": "100px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "37xl": "56px",
      "15xl": "34px",
      "26xl": "45px",
      lg: "18px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      xl: "20px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "3xs": "10px",
      xs: "12px",
      "53xl": "72px",
      "24xl": "43px",
      "39xl": "58px",
      "6xl": "25px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
