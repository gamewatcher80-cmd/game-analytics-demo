/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366F1',
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',
        dark: {
          DEFAULT: '#1E1E2E',
          card: '#2D2D3F',
          hover: '#3D3D5F',
        }
      }
    },
  },
  plugins: [],
}