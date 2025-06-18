/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // You can still use this for theme extension, but @theme in CSS is preferred for new v4 features
      // colors: {
      //   'legacy-custom': '#f00'
      // }
    },
  },
  plugins: [],
}