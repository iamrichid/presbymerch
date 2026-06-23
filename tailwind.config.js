/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        praiseInk: '#171717',
        praiseWhite: '#fefefe',
        praisePurple: '#6d28d9',
        praiseOrange: '#f59e0b',
        praiseSky: '#38bdf8',
        praisePink: '#ec4899',
        praiseViolet: '#4c1d95',
      },
      boxShadow: {
        splash: '0 24px 80px rgba(23, 23, 23, 0.20)',
      },
      backgroundImage: {
        'splash-burst':
          'radial-gradient(circle at top left, rgba(245, 158, 11, 0.28), transparent 32%), radial-gradient(circle at top right, rgba(56, 189, 248, 0.26), transparent 36%), radial-gradient(circle at bottom right, rgba(236, 72, 153, 0.26), transparent 34%), linear-gradient(135deg, #fefefe 0%, #f7f3ff 48%, #fff7ed 100%)',
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
