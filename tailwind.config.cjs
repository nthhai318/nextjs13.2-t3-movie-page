/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        backgroundcolor: "rgb(var(--color-bg-primary) / <alpha-value>)",
        backgroundneutral: "rgb(var(--color-bg-neutral) / <alpha-value>)",
        hightlight: "rgb(var(--color-hightlight-red) / <alpha-value>)",
        hightlightblue: "rgb(var(--color-hightlight-blue) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
