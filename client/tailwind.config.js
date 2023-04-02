/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    colors: {
      oscuro:  "rgb(42, 42, 42)",
      blanco: 'rgb(246, 246, 246)',
      gris: 'rgba(87, 84, 84, 0.527)',
      amarillo: "rgb(211, 191, 13)",
      trans: "rgb(0,0,0, 0)",
      fondo: "rgb(58, 58, 58)",
      trans: "rgb(58, 58, 58, 0.0)"
    },
  },

  plugins: [require("daisyui")],
}

