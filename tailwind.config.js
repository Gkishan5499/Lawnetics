/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",
],
  theme: {
    extend: {
      animation: {
        "kenburns-bottom": "kenburns-bottom 5s ease   both",
        "kenburns-top-right": "kenburns-top-right 10s ease   both",
    },
    keyframes: {
      "kenburns-bottom": {
          "0%": {
              transform: "scale(1) translateY(0)",
              "transform-origin": "50% 84%"
          },
          to: {
              transform: "scale(1.25) translateY(15px)",
              "transform-origin": "bottom"
          }
      },
      "kenburns-top-right": {
        "0%": {
            transform: "scale(1) translate(0, 0)",
            "transform-origin": "84% 16%"
        },
        to: {
            transform: "scale(1.25) translate(20px, -15px)",
            "transform-origin": "right top"
        }
    }
  }
  
    },
  },
  plugins: [],
}
