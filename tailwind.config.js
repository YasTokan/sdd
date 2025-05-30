/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}" // ✅ Angular template paths
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dynamic theme tokens
        bg: 'var(--bg-color)',
        text: 'var(--text-color)',
        primary: 'var(--primary-color)',
        accent: 'var(--accent-color)',

        // Full color palette from the image
        white: '#ffffff',
        'dark-gray': '#343F52',
        'dark-gray2': '#484848',
        'dark-gray3': '#60697B',
        'dark-gray4': '#202020',
        gray: '#AAB0BC',
        'light-gray': '#F6F7F8',
        'base-gray': '#EDF0F2',
        green: '#21AF27',
        'light-green': '#92C83E'
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem'
      },
      /* fontFamily: {
        avenir: ['AvenirArabic-SharjahGovt', 'sans-serif']
      }, */
      fontFamily: {
        body: ['Inter', 'sans-serif'], // For English
        arabic: ['AvenirArabic-SharjahGovt', 'sans-serif'] // For Arabic
      },

      /* Fonts I decreased to make a bit more realstic and match the design */
      fontSize: {
        h1: ['40px', { lineHeight: '1.2' }],
        'h1-mobile': ['24px', { lineHeight: '1.2' }],
        h2: ['42px', { lineHeight: '1.2' }],
        'h2-mobile': ['28px', { lineHeight: '1.2' }],
        h3: ['36px', { lineHeight: '1.2' }],
        'h3-mobile': ['24px', { lineHeight: '1.2' }],
        h4: ['26px', { lineHeight: '1.2' }],
        'h4-mobile': ['24px', { lineHeight: '1.2' }],
        h5: ['20px', { lineHeight: '1.2' }],
        'h5-mobile': ['16px', { lineHeight: '1.2' }],
        body: ['14px', { lineHeight: '1.6' }],
        'body-l': ['16px', { lineHeight: '1.6' }],
        'body-s': ['12px', { lineHeight: '1.5' }],

        subtitle: ['16px', { lineHeight: '1.4' }],
        subhead: ['18px', { lineHeight: '1.4' }],
        'subhead-mobile': ['14px', { lineHeight: '1.4' }],
      }

      /* Fonts are they suggested but too big to use */
      /*  fontSize: {
      h1: ['53.3px', { lineHeight: '1.2' }],
      'h1-mobile': ['32px', { lineHeight: '1.2' }],
      h2: ['56px', { lineHeight: '1.2' }],
      'h2-mobile': ['37.3px', { lineHeight: '1.2' }],
      h3: ['48px', { lineHeight: '1.2' }],
      'h3-mobile': ['32px', { lineHeight: '1.2' }],
      h4: ['34.7px', { lineHeight: '1.2' }],
      'h4-mobile': ['32px', { lineHeight: '1.2' }],
      h5: ['26.7px', { lineHeight: '1.4' }],
      'h5-mobile': ['21.3px', { lineHeight: '1.4' }],
      body: ['18.7px', { lineHeight: '1.6' }],
      'body-l': ['21.3px', { lineHeight: '1.6' }],
      'body-s': ['16px', { lineHeight: '1.5' }],
      subtitle: ['21.3px', { lineHeight: '1.5' }],
      subhead: ['24px', { lineHeight: '1.5' }],
      'subhead-mobile': ['18.7px', { lineHeight: '1.5' }],
    } */
      ,
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        'zoom-in': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        /* pulseRing: {
       '0%': { transform: 'scale(0.8)', opacity: '1' },
       '100%': { transform: 'scale(2.2)', opacity: '0' },
     }, */

        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.3' },
          '100%': { transform: 'scale(2.5)', opacity: '0' },
        },

        pulseColor: {
          '0%, 100%': { backgroundColor: 'white' },
          '50%': { backgroundColor: 'var(--primary-color)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 2.8s ease-out forwards',
        'zoom-in': 'zoom-in 3.6s ease-out forwards',
        'scale-in': 'scale-in 5.5s ease-out forwards',
        'pulse-ring': 'pulseRing 2.5s cubic-bezier(0.66, 0, 0, 1) infinite',
        'pulse-color': 'pulseColor 2.5s ease-in-out infinite',
      }
    }
  },
  plugins: [
    require('tailwindcss-rtl')
  ]
}
