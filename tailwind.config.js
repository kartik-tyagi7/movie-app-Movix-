/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "40px"],
      "4xl": ["36px", "50px"],
      "5xl": ["50px", "60px"],
      "6xl": ["65px", "60px"],
      "7xl": ["80px", "60px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      width:{
        'custom_carousel_md': 'calc(25% - 15px)',
        'custom_carousel_lg': 'calc(20% - 16px)'
      },
      colors: {
        black: "#04152d",
        black2: "#041226",
        black3: "#020c1b",
        black_light: "#173d77",
        black_lighter: " #1c4b91",
        pink: "#da2f68",
        orange: "#f89e00",
        gradient: "linear-gradient(98.37deg, #f89e00 0.99%, #da2f68 100%)",
      },
    },
  },
  plugins: [],
};
