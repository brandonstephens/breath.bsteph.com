const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}'],

  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        yellow: colors.amber,
      },
      keyframes: {
        breath: {
          '0%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.7)' },
          '50%': { transform: 'scale(1.7)' },
          '75%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      animation: {
        breath: 'breath 16s ease-in-out infinite',
      }
    },
  }
};
