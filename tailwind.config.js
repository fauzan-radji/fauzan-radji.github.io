/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        corbeau: "#131327",
        "dark-knight": "#191830",
        "empire-yellow": "#FAD000",
        "mandarin-peel": "#FF9D00",
        "bright-mint": "#A5FF90",
        "glitchy-shader-blue": "#9EFFFF",
        "purple-hedonist": "#b362ff",
        "lemon-peel": "#FFEE80",
      },
    },
  },
  plugins: [],
};
