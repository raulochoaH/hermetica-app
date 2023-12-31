/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'arrow-up': "url('/arrow-circle-up.svg')",
        'right-arrow': "url('/right-arrow.svg')",
        'btc-logo': "url('/btc_logo.svg')",
        'timer': "url('/timer.svg')",
      },
    },
  },
  plugins: [],
}
