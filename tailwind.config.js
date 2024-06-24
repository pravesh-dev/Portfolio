/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        yellowTail: ['yellowTail'],
        monseret: ['monsert']
      },
      colors: {
        primary: "#FD563C",
      }
    },
  },
  plugins: [],
}

