/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "primary-background": "#202c33",
        "secondary-background": "#2E363C",
        "tertiary-background": "#111b21",
        "primary-text": "#a3aaac",
      },
    },
  },
  plugins: [],
};
