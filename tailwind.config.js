const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: '0.625rem'
      },
      fontFamily: {
        "fira-medium": "var(--font-fira)",
        "inter-medium": "var(--font-inter)",
      },
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        'primary': '#E8DECF',
        'secondary': '#0E2328',
        'cream': '#867F73',
        'grey': {
          'body': '#565656',
          'title': '#969696',
          'keyline': '#E3E3E3',
          'text': '#828282' 
        },
        'red': '#DB1B1B'      
      },
      backgroundImage: {
        'header-circle': "url('/asset/headeroval.png')",
        'newsletter': "url('/asset/imagebg.png')",
      },
      dropShadow: {
        't1': '0px 1px 8px 0px rgba(0, 0, 0, 0.13)',
        't2': '0px 0px 10px 0px rgba(0, 0, 0, 0.10)'
      },
      boxShadow: {
        't1': '0px 1px 8px 0px rgba(0, 0, 0, 0.13)',
        't2': '0px 0px 10px 0px rgba(0, 0, 0, 0.10)'
      },
    },
    screens: {
      '2xl': {'max': '1535px'},
      'xl': {'max': '1280px'},
      'lg': {'max': '1028px'},
      'xmd': {'max': '899px'},
      'md': {'max': '767px'},
      'sm': {'max': '599px'},
    },
    container: {
      center: true,
      screens: {
        default: '1312px'
      },
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '1rem',
        xmd: '2rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '2rem',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& *');
      addVariant('child-hover', ':hover& *');
  }
  ],
};
export default config;
