/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'mobile': '200px',
      'tablet': '800px',
      'desktop': '1280px'
    },
    colors: {
      'light-gray': 'var(--light-gray)',
      'dark-blue': 'var(--dark-blue)',
      'main-blue': 'var(--main-blue)',
      'light-blue': 'var(--light-blue)',
      'lightest-blue': 'var(--lightest-blue)',
      'light-orange': 'var(--light-orange)',
      'dark-orange': 'var(--dark-orange)',
      'white': 'var(--white)',
      'black': 'var(--black)'
    },
    extend: {},
  },
  plugins: [],
};
