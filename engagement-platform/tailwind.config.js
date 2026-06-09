/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy:     '#1E3A6E',
        ink:      '#0D1B2A',
        canvas:   '#F8F7F4',
        mulberry: '#8E3B5E',
        cobalt:   '#4A7EC7',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: '5px',
      },
      boxShadow: {
        navy:     '0 10px 40px rgba(30, 58, 110, 0.15)',
        mulberry: '0 10px 40px rgba(142, 59, 94, 0.20)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
