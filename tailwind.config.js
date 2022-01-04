const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "pages/**/*.{tsx,jsx,js,ts}",
    "components/**/*.{tsx,jsx,js,ts}",
    "locales/**/*.{tsx,jsx,js,ts,json}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "360px",
      },
      fontFamily: {
        Sen: ["Sen", ...defaultTheme.fontFamily.sans],
        Prompt: ["Prompt", ...defaultTheme.fontFamily.sans],
        Kanit: ["Kanit", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
