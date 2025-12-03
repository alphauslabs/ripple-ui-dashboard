const { join } = require('path');
const { tailwindPreset } = require('./lib/constants/src/lib/tailwind/tailwind-config.ts');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [tailwindPreset],
  content: [
    join(
      __dirname,
      'src/**/*.{ts,tsx,html}'
    ),
    join(
      __dirname,
      'lib/**/src/**/*.{ts,tsx,html}'
    ),
  ],
};
