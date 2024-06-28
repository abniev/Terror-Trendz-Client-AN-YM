/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: true,
  theme: {
    extend: {
      fontFamily: {
        Sophisto: ["Sophisto", "sans-serif"],
      },
      extend: {},
    },
  },
  plugins: [require("flowbite/plugin")],
};
