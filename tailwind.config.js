// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slide-left': 'slide-left 1.5s ease-in-out infinite',
        'slide-right': 'slide-right 1.5s ease-in-out infinite',
      },
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translateX(0) scale(1)' },
          '50%': { transform: 'translateX(-8px) scale(1.1)' },
          '100%': { transform: 'translateX(0) scale(1)' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(0) scale(1)' },
          '50%': { transform: 'translateX(8px) scale(1.1)' },
          '100%': { transform: 'translateX(0) scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
