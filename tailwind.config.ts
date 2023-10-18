/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        sidebar: "300px auto", // 👈 for sidebar layout.
      },
      gridTemplateRows: {
        header: "64px auto", // 👈 for the navbar layout.
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
        montserrat: ["var(--font-montserrat", ...fontFamily.sans],
      },

      backgroundImage: {
        "primary-gradient":
          "linear-gradient(180.96deg, #000000 0.82%, #4A2800 129.1% )",
      },

      colors: {
        primary: {
          light: "#FCC182",
          DEFAULT: "#FA9021",
          dark: "#AF5B04",
        },
      },
    },
  },
  plugins: [],
};
