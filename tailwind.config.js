/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-sand": "#DAB49D",
        "custom-linen": "#F3E9DC",
        "custom-caramel": "#C08552",
      },
    },
  },
  plugins: [require("daisyui")],
};
