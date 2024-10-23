/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"]
    },
    extend: {
      colors: {
        "primary": "#1B5C98",
        "secondary": "#EE7595",
        "tertiary": "#9F89A9",
        "error": "#FF5449",
        "neutral": "#909093",
        "neutral-variant": "#8D9198"
      }
    },
  },
  plugins: [],
}

