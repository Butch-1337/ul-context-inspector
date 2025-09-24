/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}'
  ],
  // Disable preflight so we don't inject global resets into host apps.
  corePlugins: { preflight: false },
  prefix: 'uci-',
  theme: {
    extend: {}
  },
  plugins: []
};
