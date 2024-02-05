module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'split-white-black':
          'linear-gradient(to bottom, #F2A111 50% , white 50%);',
      },
      colors: {
        'base-gray': '#334756',
        'base-yellow': '#F2A111',
        'base-slate': '#06283D',
        'base-sky': '#00AFA1',
      },
      fontFamily: {
        baseExtraBold: ['base-extra-bold'],
        baseBold: ['base-bold'],
        baseRegular: ['base-regular'],
        baseThin: ['base-thin'],
      },
      keyframes: {
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)',
          },
          '25%': {
            opacity: '1',
            transform: 'transformX(20px)',
          },
          '50%': {
            transform: 'transformX(35px)',
          },
          '75%': {
            transform: 'transformX(40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(10px)',
          },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '50%': {
            transform: 'transformY(5px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(10px)',
          },
        },
        'wobble-in': {
          '20%': {
            transform: 'rotate3d(0, 0, 1, 5deg)',
          },
          '40%': {
            transform: 'rotate3d(0, 0, 1, 20deg)',
          },
          '60%': {
            transform: 'rotate3d(0, 0, 1, 35deg)',
          },
          '80%': {
            transform: 'rotate3d(0, 0, 1, -30deg)',
          },
          '90%': {
            transform: 'rotate3d(0, 0, 1, 35deg)',
          },
          '100%': {
            transform: 'rotate3d(0, 0, 1, 0deg)',
          },
        },
      },
      animation: {
        'fade-in-right': 'fade-in-right 2s ease-out infinite',
        'fade-in-down': 'fade-in-down 2s ease-out infinite',
        'wobble-in': 'wobble-in 2s ease-out infinite',
      },
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
};
