
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",             // Scans your main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Essential: Scans all JS/TS/JSX/TSX files in src/
  ],
  theme: {
    extend: {
      // While you can still use this for JS-based theme extension (backward compatibility),
      // the CSS-first approach using `@theme` in `src/index.css` is preferred for v4.
    },
  },
 plugins: [require('tailwind-scrollbar')],

}