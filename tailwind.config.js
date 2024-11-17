/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1B3C6B", // Deep navy blue
          50: "#E6EBF2",
          100: "#C2D1E3",
          200: "#9BB4D3",
          300: "#7497C3",
          400: "#4D7AB3",
          500: "#1B3C6B",
          600: "#163156",
          700: "#112642",
          800: "#0B1B2D",
          900: "#061019"
        },
        industrial: {
          DEFAULT: "#2C3E50", // Industrial steel blue
          light: "#34495E",
          dark: "#2C3E50"
        },
        railway: {
          red: "#C41E3A", // Railway signal red
          yellow: "#FFD700", // Safety yellow
          steel: "#71797E", // Steel gray
          track: "#463E3F" // Track brown
        }
      },
      backgroundImage: {
        'railway-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23000000\" fill-opacity=\"0.03\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
      }
    },
  },
  plugins: [],
}