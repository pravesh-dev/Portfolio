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
        primary_dark: '#ff2403',
        // primary: "#7900ff",
        // primary_dark: '#4b009d',
        // primary_light: '#8b22ff',
      }
    },
  },
  plugins: [],
}

