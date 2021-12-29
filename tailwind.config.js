const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["pages/**/*.{tsx,jsx,js,ts}", "components/**/*.{tsx,jsx,js,ts}"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
      },
      fontFamily: {
        Sen: ["Sen", ...defaultTheme.fontFamily.sans],
        Montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
        Spartan: ["Spartan", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
