/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"],
  theme: {
      extend: {
          fontFamily: {
              Charm: ['Charm', 'Sans-Serif'],
              Cormorant: ['Cormorant Upright', 'Sans-Serif'],
              Baby: ['Oooh Baby', 'Sans-Serif']
          },
          borderRadius: {
              lg: 'var(--radius)',
              md: 'calc(var(--radius) - 2px)',
              sm: 'calc(var(--radius) - 4px)'
          }
      }
  },
  plugins: [("tailwindcss-animate")]
}