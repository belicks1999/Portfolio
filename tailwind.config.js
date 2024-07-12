/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        ping: 'ping 1.5s ease-in-out 1 4.5s',
        spin: 'spin 5s linear infinite',
      },
    },
  },
  plugins: [],
}