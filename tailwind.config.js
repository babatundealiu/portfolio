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
    './src/**/*.{ts,tsx}',
    
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
        secondary: '#bac98a',
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
        xs: { min: "300px", max: "420px" },
        sm: { min: "425px", max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }
        md: { min: "768px", max: "1023px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }
        lg: { min: "1024px", max: "1279px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
        xl: { min: "1280px", max: "1535px" },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
        "2xl": { min: "1536px" },
        // => @media (min-width: 1536px) { ... }
        // radio: { max: '320px' },
        // phone: { max: '375px' },
        // mobile: { max: '425px' },
        // tablet: { max: '768px' },


        // sm: '640px',
        // md: '768px',
        // lg: '1024px',
        // xl: '1280px',
        // '2xl': '1536px'
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