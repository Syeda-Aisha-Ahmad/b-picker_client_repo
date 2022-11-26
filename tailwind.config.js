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

          "primary": "#711c40",

          "secondary": "#642a43",

          "accent": "#530928",

          "neutral": "#73777B",

          "base-100": "#F9F8FB",

          "info": "#5e2f43c4",

          "success": "#17976C",

          "warning": "#F08C28",

          "error": "#F46783",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
