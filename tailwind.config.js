/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  experimental: {
    layers: ['components']
  },
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      colors: {
        primary: '#201e21',
        secondary: '#e99343',
        destructive: '#ddc2a5',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)'},
          to: { transform: 'translateX(-100)'},
        },
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        }
      },
      // animation: {
      //   'accordion-down': 'accordion-down 0.2s ease-out',
      //   'accordion-up': 'accordion-up 0.2s ease-out',
      //   // 'loop-scroll': 'loop-scroll 50s linear infinite'
      // },
      screens: {
        radio: { max: '320px' },
        phone: { max: '375px' },
        mobile: { max: '425px' },
        tablet: { max: '768px' },


        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      }
    }
  },
  plugins: [require('tailwindcss-animated')]
}

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//       "./index.html",
//       "./src/**/*.{js,ts,jsx,tsx}",
//       "./node_modules/tw-elements-react/dist/js/**/*.js",
//       'node_modules/flowbite-react/lib/esm/**/*.js'

//   ],
//   theme: {
//       extend: {},
//   },
  
//   darkMode: "class",
//   plugins: [
//     ("tw-elements-react/dist/plugin.cjs","flowbite/plugin")
//   ]
//   }