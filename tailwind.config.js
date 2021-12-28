module.exports = {
  content: ["pages/**/*.{tsx,jsx,js,ts}", "components/**/*.{tsx,jsx,js,ts}"],
  theme: {
    extend: {
      colors: {
        teal: {
          600: "#009CAD",
          500: "#70DEE6",
          400: "#009CAD",
        },
        yellow: "#FEE551",
        "black-gray": "#27272A",
        "white-gray": "#F7FAFC",
        black: "#334155",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
