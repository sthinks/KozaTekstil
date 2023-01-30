/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  theme: {
    extend: {
      screens: {
        '2lg': '1150px',
      },
      boxShadow: {
        koza: '0px 4px 4px rgba(0, 0, 0, 0.04)',
      },
      borderRadius: {
        '4xl': '50px',
      },
      textColor: {
        'brand': '#004C96'
      }
    },
    fontFamily: {
      grape: [
        "Grape Nuts, cursive",
        { fontFeatureSettings: '"cv11", "ss01"' },
      ],
      sans: [
        "Lato, sans-serif",
        { fontFeatureSettings: '"cv11", "ss01"' },
      ],
      newyork: [
        "newyork, sans-serif",
        { fontFeatureSettings: '"cv11", "ss01"' },
      ],

    },
  },
  plugins: [],
}
