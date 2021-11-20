module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        hambuger: {
          '0%': { transform: 'translateX(-100%)' },
          '3%': { transform: 'translateX(0%)' },
          '97%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        hambuger1: 'hambuger 4s linear 0s infinite running',
        hambuger2: 'hambuger 4s linear 0.1s infinite running',
        hambuger3: 'hambuger 4s linear 0.2s infinite running',
      },
    },
    fontFamily: {
      gt: ['gt'],
      august: ['august'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
