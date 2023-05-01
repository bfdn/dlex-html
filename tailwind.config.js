/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        lg: '1128px',
        xl: '1128px',
        '2xl': '1128px',
      }
    },
    fontSize: {
      xs: ['0.75rem', '21.6px'], // 12px
      sm: ['0.875rem', '25.2px'], // 14px
      base: ['1rem', '28.8px'], // 16px
      lg: ['1.125rem', '32.4px'], // 18px
      xl: ['1.25rem', '36px'], // 20px
      '2xl': ['1.5rem', '33.6px'], // 24px
      '3xl': ['2rem', '44.8px'], // 32px
      '4xl': ['2.5rem', '56px'], // 40px
      '5xl': ['2.75rem', '61.6px'], // 44px
      '6xl': ['3.5rem', '67.2px'], // 56px
      '7xl': ['4rem', '89.6px'], // 64px
      /*'xs': ['0.75rem', {
        lineHeight: '21.6px',
        fontWeight: '400',
      }],
      'sm': ['0.875rem', {
        lineHeight: '25.2px',
        fontWeight: '400',
      }],
      'base': ['1rem', {
        lineHeight: '28.8px',
        fontWeight: '400',
      }],
      'lg': ['1.125rem', {
        lineHeight: '32.4px',
        fontWeight: '400',
      }],
      'xl': ['1.25rem', {
        lineHeight: '36px',
        fontWeight: '400',
      }],
      'h1': ['2.75rem', {
        lineHeight: '61.6px',
        fontWeight: '700',
      }],
      'h2': ['2.5rem', {
        lineHeight: '56px',
        fontWeight: '700',
      }],
      'h3': ['2rem', {
        lineHeight: '44.8px',
        fontWeight: '700',
      }],
      'h4': ['1.5rem', {
        lineHeight: '33.6px',
        fontWeight: '700',
      }],
      'h5': ['1.25rem', {
        lineHeight: '28px',
        fontWeight: '700',
      }],
      'h6': ['1rem', {
        lineHeight: '22.4px',
        fontWeight: '700',
      }],
      'display1': ['10.66rem', {
        lineHeight: '89.6px',
        fontWeight: '700',
      }],
      'display2': ['9.33rem', {
        lineHeight: '67.2px',
        fontWeight: '700',
      }],
      'button-sm': ['0.875rem', {
        lineHeight: '24px',
        fontWeight: '500',
      }],
      'button-lg': ['1rem', {
        lineHeight: '24px',
        fontWeight: '500',
      }],
      'caption-md': ['0.75rem', {
        lineHeight: '21.6px',
        fontWeight: '600',
      }],
      'caption-lg': ['0.875rem', {
        lineHeight: '25.2px',
        fontWeight: '600',
      }],
      */
      /*
      '2xl': ['0.75rem', {
        lineHeight: '1.35',
        fontWeight: '400',
      }],
      '3xl': ['0.75rem', {
        lineHeight: '1.35',
        fontWeight: '400',
      }],
      '4xl': ['0.75rem', {
        lineHeight: '1.35',
        fontWeight: '400',
      }],
      */

      /*
      xs: ['0.75rem', '1.35rem'], // 12px
      sm: ['0.875rem', '1.375rem'], // 14px
      base: ['1rem', '1.5rem'], // 16px
      lg: ['1.125rem', '1.5rem'], // 18px
      xl: ['1.25rem', '1.625rem'], // 20px
      '2xl': ['1.5rem', '1.875rem'], // 24px
      '3xl': ['1.75rem', '2.1875rem'], // 28px
      '4xl': ['2.25rem', '2.8125rem'], // 36px
      '5xl': ['2.75rem', '3.4375rem'], // 44px
      */
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'new-grayscale': {
          50: '#F9F9FB',
          100: '#F3F3F6',
          200: '#E5E5EB',
          300: '#D1D1DB',
          400: '#9D9CAF',
          500: '#6C6B80',
          600: '#4C4B63',
          700: '#383751',
          800: '#201F37',
          900: '#121127',
        },
        'new-indigo': {
          50: '#F2F3FF',
          100: '#DEE0FA',
          200: '#B4B7F0',
          300: '#878DE8',
          400: '#6068DB',
          500: '#444BD3',
          600: '#3F43C8',
          700: '#3638BC',
          800: '#2D2CB0',
          900: '#1E149D',
        },
        'new-purple': {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
        },
        'new-blue': {
          50: '#E1F5FF',
          100: '#BDE3FF',
          200: '#94C5FF',
          300: '#6EADFC',
          400: '#599BF9',
          500: '#4E8AF4',
          600: '#4C7CE5',
          700: '#496AD0',
          800: '#4559BD',
          900: '#3E399B',
        },
        'new-yellow': {
          50: '#FFF4E6',
          100: '#FFE7C7',
          200: '#FFD89F',
          300: '#FFBC5D',
          400: '#FFAC3D',
          500: '#FF9E2A',
          600: '#FF9129',
          700: '#FF8127',
          800: '#FC7125',
          900: '#F25722',
        },
        'new-green': {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
        'new-cyan': {
          50: '#E4FAFC',
          100: '#BBF3F7',
          200: '#90ECF4',
          300: '#67E4EF',
          400: '#4EDCEB',
          500: '#43D6E8',
          600: '#3EC4D5',
          700: '#38AEBA',
          800: '#339AA2',
          900: '#2A7576',
        },
        'new-red': {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
        },
        'new-pink': {
          50: '#FDF2F8',
          100: '#FCE7F3',
          200: '#FBCFE8',
          300: '#F9A8D4',
          400: '#F472B6',
          500: '#EC4899',
          600: '#DB2777',
          700: '#BE185D',
          800: '#9D174D',
          900: '#831843',
        },
      },
      width: {
        '50': 'calc(50% - 15px)',
        '33': 'calc(33.3333% - 20px)',
        '25': 'calc(25% - 24px)',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '15': 'repeat(auto-fit,minmax(14rem,1fr))',
        '20': 'repeat(auto-fit,minmax(20rem,1fr))',
        '30': 'repeat(auto-fit,minmax(30rem,1fr))',
        '40': 'repeat(auto-fit,minmax(40rem,1fr))',
        'max-auto-1': 'repeat(auto-fit,minmax(10rem,max-content))',
        'max-auto-2': 'repeat(auto-fit,minmax(15rem,max-content))',
        'max-auto-3': 'repeat(auto-fit,minmax(20rem,max-content))',
        'max-auto-4': 'repeat(auto-fit,minmax(25rem,max-content))',
        'max-auto-5': 'repeat(auto-fit,minmax(30rem,max-content))',
        'max-auto-6': 'repeat(auto-fit,minmax(35rem,max-content))',
        'max-auto-7': 'repeat(auto-fit,minmax(40rem,max-content))',
        'max-1': 'repeat(1,minmax(0,max-content))',
        'max-2': 'repeat(2,minmax(0,max-content))',
        'max-3': 'repeat(3,minmax(0,max-content))',
        'max-4': 'repeat(4,minmax(0,max-content))',
        'max-5': 'repeat(5,minmax(0,max-content))',
        'max-6': 'repeat(6,minmax(0,max-content))',
        'max-7': 'repeat(7,minmax(0,max-content))',
        'max-8': 'repeat(8,minmax(0,max-content))',
        'max-9': 'repeat(9,minmax(0,max-content))',
        'max-10': 'repeat(10,minmax(0,max-content))',
        'max-11': 'repeat(11,minmax(0,max-content))',
        'max-12': 'repeat(12,minmax(0,max-content))',
      }
    },
  },
  plugins: [
    //require('@tailwindcss/forms'),
    /*require("@tailwindcss/forms")({
      strategy: 'base', // only generate global styles
      //strategy: 'class', // only generate classes
    }),*/
  ],
}

//font-thin	100;
//font-extralight	200;
//font-light 300;
//font-normal	400;
//font-medium	500;
//font-semibold	600;
//font-bold	700;
//font-extrabold 800;
//font-black 900