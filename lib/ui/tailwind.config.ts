const { tailwindPreset } = require('@project-ed/lib-constants');

module.exports = {
  presets: [tailwindPreset],
  content: ['./apps/**/*.{js,ts,jsx,tsx}', './libs/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
