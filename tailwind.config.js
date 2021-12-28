module.exports = {
  content: ["pages/**/*.{tsx,jsx,js,ts}", "components/**/*.{tsx,jsx,js,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}
