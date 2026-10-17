/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        poke: {
          red: '#EF4444',
          darkRed: '#DC2626',
          blue: '#3B82F6',
          yellow: '#EAB308',
          dark: '#1E293B',
          card: '#0F172A',
        }
      }
    },
  },
  plugins: [],
}
