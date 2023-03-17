/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      productsbg: "url('/pexels-pixabay-355518.jpg')",
      animation: {
        "color-change-2x": "color-change-2x 4s linear  infinite alternate both",
        "color-change-4x": "color-change-4x 6s linear  infinite alternate both",
        "scale-in-center":
          "scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "slide-in-top":
          "slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
      },
      keyframes: {
        "color-change-2x": {
          "0%": {
            background: "rgba(244, 244, 245, 0.8)",
          },
          to: {
            background: "rgba(203, 213, 225, 0.2)",
          },
        },
        "color-change-4x": {
          "0%": {
            color: "#CFFAFE",
          },
          "33.3333%": {
            color: "#BAE6FD",
          },
          "66.666%": {
            color: "#93C5FD",
          },
          to: {
            color: "#CCFBF1",
          },
        },
        "scale-in-center": {
          "0%": {
            transform: "scale(1)",
            opacity: "1",
          },
          to: {
            transform: "scale(1.2)",
            opacity: "1",
          },
        },
        "slide-in-top": {
          "0%": {
            transform: "translateY(-1000px)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
