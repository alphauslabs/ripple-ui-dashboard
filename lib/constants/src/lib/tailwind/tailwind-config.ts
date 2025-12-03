import * as tailwindcssAnimate from 'tailwindcss-animate';

const responsiveClasses = {
  // Mobile: Visible only below 1024px
  '.mobile': {
    '@screen lg': {
      display: 'none',
    },
  },
  // Desktop: Visible only above 1024px
  '.desktop': {
    display: 'none',
    '@screen lg': {
      display: 'block',
    },
  },
};

const tailwindPreset = {
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        // Tang Blue colors
        tangBlue: {
          5: '#000e34',
          10: '#00174b',
          20: '#002a78',
          30: '#003ea8',
          40: '#1d55ce',
          50: '#406fe9',
          60: '#628bff',
          70: '#8ca8ff',
          80: '#b4c5ff',
          90: '#dbe1ff',
          95: '#eff0ff',
          97: '#F6F5FF',
          98: '#FAF8FF',
        },
        // Neutral colors
        neutral: {
          5: '#0e0f1e',
          10: '#161b29',
          20: '#2d3040',
          30: '#434657',
          40: '#595d6e',
          50: '#747688',
          60: '#8e90a3',
          70: '#a7abbe',
          80: '#c2c5d9',
          90: '#dfe2f6',
          95: '#eef0ff',
          100: '#ffffff',
        },
        // Danger colors
        danger: {
          5: '#2d0004',
          10: '#400008',
          20: '#690012',
          30: '#8f0f21',
          40: '#b02b36',
          50: '#d2444c',
          60: '#f55e63',
          70: '#ff8889',
          80: '#ffb3b2',
          90: '#ffdad8',
          95: '#ffedec',
        },
        // Success colors
        success: {
          5: '#001600',
          10: '#002101',
          20: '#003a02',
          30: '#005404',
          40: '#006e08',
          50: '#128a15',
          60: '#39a631',
          70: '#75bc67',
          80: '#abd19f',
          90: '#d9e7d1',
          95: '#eff2e9',
        },
        // Info colors
        info: {
          5: '#000f31',
          10: '#001945',
          20: '#002c6f',
          30: '#00429d',
          40: '#0057cb',
          50: '#1d70f6',
          60: '#588dff',
          70: '#86a9ff',
          80: '#b1c6ff',
          90: '#dae2ff',
          95: '#eef0ff',
        },
        // Warning colors
        warning: {
          5: '#1b0f00',
          10: '#281800',
          20: '#452b00',
          30: '#634000',
          40: '#815500',
          50: '#a26c00',
          60: '#c58400',
          70: '#e79c00',
          80: '#ffba4e',
          90: '#ffdeb3',
          95: '#ffeedc',
        },
      },
      fontFamily: {
        // change default font to Inter
        sans: ['Inter', 'sans'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export { tailwindPreset, responsiveClasses };
