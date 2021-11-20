module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xss: '.6rem',
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '2k': '8rem',
    },
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
      neutra: ['neutra'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
