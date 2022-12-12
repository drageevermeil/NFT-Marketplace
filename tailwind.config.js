module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'prim-dark': '#24252D',
        'prim-gray-1': '#E3E1E3',
        'prim-gray-2': '#888888',
        'prim-gray-3': '#4F4F4F',
        'prim-black-1': '#2D2E36',
        'prim-black-2': '#1B1A21',
        'prim-black-3': '#2A2D3A',
        'prim-black-4': '#24252D',
        'prim-blue': '#57C6DC',
        'prim-pink': '#E287D4',
      },
      padding: {
        30: '120px',
        160: '640px',
        140: '560px',
      },
      margin: {
        30: '120px',
      },
      width: {
        300: '300px',
        400: '400px',
        500: '500px',
        700: '700px',
      },
      height: {
        200: '200px',
        300: '300px',
        500: '500px',
        700: '700px',
        900: '900px',
      },
    },
    screens: {
      lg: { max: '1800px' },
      md: { max: '1080px' },
      sm: { max: '600px' },
      xs: { max: '400px' },
      mobile: '600px',
      note: '800px',
      tablet: '1080px',
      laptop: '1230px',
      pc: '1500px',
      minmd: '1700px',
      minlg: '2100px',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },
  plugins: [],
};
