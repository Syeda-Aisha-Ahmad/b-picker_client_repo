/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#4cc0c0",

          "secondary": "#98dede",

          "accent": "#149999",

          "neutral": "#73777B",

          "base-100": "#F9F8FB",

          "info": "#3A8FD4",

          "success": "#17976C",

          "warning": "#F08C28",

          "error": "#F46783",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
