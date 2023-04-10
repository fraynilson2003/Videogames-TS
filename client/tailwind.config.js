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
      gris: 'rgba(87, 84, 84)',
      amarillo: "rgb(211, 191, 13)",
      trans: "rgb(0,0,0, 0)",
      fondo: "rgb(58, 58, 58)",
      rojo: "rgb(170, 10, 30)",

      verde: "rgb(7, 102, 19)",
      azul: "rgb(30, 30, 117)",
    },
    boxShadow: {
      custom: '0px 0px 10px 3px rgb(30, 30, 30)',
      none: '0px 0px 0px 0px'
    },
  },

  plugins: [require("daisyui")],
}

