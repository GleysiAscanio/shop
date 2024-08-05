/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
    "./renderer/**/*.{vue,js,ts,jsx,tsx}",
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
  ],  theme: {
    fontFamily: {
      'sans': ["Plus Jakarta Sans", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/fondo.jpg')",
      }
    },
  },
  plugins: [],
}

// fontFamily: `"Plus Jakarta Sans", "sans-serif"`,

