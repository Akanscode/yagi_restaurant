/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1200px",
      // => @media (min-width: 1200px) { ... }
    },
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      mono: ["Space Mono", "monospace"],
    },
    extend: {
      colors: {
        grey: {
          0: "#FCFCFD",
          10: "#F9FAFB",
          20: "#F2F4F7",
          30: "#EAECF0",
          40: "#D0D5DD",
          50: "#98A2B3",
          60: "#667085",
          70: "#475467",
          80: "#344054",
          90: "#1D2939",
          100: "#101828",
        },

        "status-yellow": {
          0: "#FFFCF5",
          10: "#FFE5B2",
          20: "#FFD98F",
          30: "#F5CE84",
          40: "#EBBF67",
          50: "#E5AE40",
          60: "#D6981B",
          70: "#8F6512",
          80: "#8F6512",
          90: "#66480D",
          100: "#463209",
        },
        "status-red": {
          0: "#FFFBFA",
          10: "#FEF3F2",
          20: "#FEE4E2",
          30: "#FECDCA",
          40: "#FDA29B",
          50: "#F97066",
          60: "#F04438",
          70: "#D92D20",
          80: "#B42318",
          90: "#912018",
          100: "#7A271A",
        },
      },
    },
  },
  plugins: [],
};
