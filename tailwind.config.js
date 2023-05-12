/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xxxs: "376px",
        xxs: "440px",
        xs: "540px",
        mf: "900px",
        xl3: "1465px",
        xl4: "1610px",
        xxxl: "2400px",
      },
      fontFamily: {
        primary: ["var(--font-whyte-regular)"],
        primaryMedium: ["var(--font-whyte-medium)"],
        primaryLight: ["var(--font-whyte-light)"],
        primaryBold: ["var(--font-whyte-bold)"],
      },
      colors: {
        "primary-brown": "#462B34",
        "primary-orange": "#FFB65E",
        "secondary-orange": "#EAA24B",
        "custom-green": "#B6ECCC",
        "custom-bg": "#FFF9F3",
        "custom-bg-secondary": "#FFF7EF",
        "custom-red": "#FCB2B2",
        "custom-yellow": "#FFF5B7",
        "custom-blue": "#B9C8FF",
        "custom-violet": "#D4B6EC",
        "custom-grey": "#727272",
        "custom-sandal": "#FFC682",
        "custom-dark-green": "#61E396",
        "custom-rose":"#ECB6DA",
        "custom-orange":"#FFB65E",
      },
      keyframes: {
        scaleIn: {
          "0%": { transform: "scale(1)", opacity: 1 },
          "50%": { transform: "scale(0)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        scaleOut: {
          "0%": { transform: "scale(0)", opacity: 0 },
          "50%": { transform: "scale(1)", opacity: 1 },
          "100%": { transform: "scale(0)", opacity: 0 },
        },
        circleFill: {
          "0% ": { clipPath: "circle(10%)" },
          "100% ": { clipPath: "circle(75%)" },
        },
      },
      animation: {
        scaleIn: "scaleIn 3s ease-in-out infinite",
        scaleOut: "scaleOut 3s ease-in-out infinite reverse",
        spin: "spin 5s linear infinite",
        circleFill: "circleFill 0.3s linear  ",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(13.5rem, 1fr))",
      },
      backgroundImage: {
        "body-background": "url('../../public/Rectangle.svg')",
      },
    },
  },
  plugins: [],
};
