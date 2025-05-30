/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}" // ✅ Angular template paths
  ],
  darkMode: 'class',
  theme: {
    extend: {
      /* colors: {
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
      }, */

      /*  fontSize: {
       h1: ['53px', { lineHeight: '1.2' }],
       'h1-mobile': ['32px', { lineHeight: '1.2' }],
       h2: ['56px', { lineHeight: '1.2' }],
       'h2-mobile': ['37px', { lineHeight: '1.2' }],
       h3: ['36px', { lineHeight: '1.2' }],
       'h3-mobile': ['32px', { lineHeight: '1.2' }],
       h4: ['35px', { lineHeight: '1.2' }],
       'h4-mobile': ['32px', { lineHeight: '1.2' }],
       h5: ['27px', { lineHeight: '1.2' }],
       'h5-mobile': ['21px', { lineHeight: '1.2' }],
       body: ['19px', { lineHeight: '1.6' }],
       'body-l': ['21px', { lineHeight: '1.6' }],
       'body-s': ['16px', { lineHeight: '1.5' }],
       subtitle: ['21px', { lineHeight: '1.4' }],
       subhead: ['24px', { lineHeight: '1.4' }],
       'subhead-mobile': ['19px', { lineHeight: '1.4' }],
     }, */

      colors: {
        bg: 'var(--bg-color)',
        text: 'var(--text-color)',
        primary: 'var(--primary-color)',
        accent: 'var(--accent-color)',
      },
      textSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem'
      },
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
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 2.8s ease-out forwards',
        'zoom-in': 'zoom-in 3.6s ease-out forwards',
        'scale-in': 'scale-in 5.5s ease-out forwards'
      }
    }
  },
  plugins: [
    require('tailwindcss-rtl')
  ]
}
