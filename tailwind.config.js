/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2D5046',
          light: '#4A7C6F',
          soft: '#6BA396',
          muted: '#E8F0ED',
        },
        ink: '#1A1A1A',
        muted: '#666666',
        subtle: '#888888',
        surface: '#FAFAF8',
        line: '#E8E6E1',
        sand: '#F4F2EE',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 40px rgba(0,0,0,0.08)',
        nav: '0 1px 20px rgba(0,0,0,0.06)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
