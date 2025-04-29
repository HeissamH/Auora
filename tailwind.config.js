/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#030014',
        secondary: '#151312',
        tertiary: '#6BCB77',
        background: '#F7F7FF',
        light: {
          100:'#d6c6ff',
          200: '#bfa3ff',
          300: '#9CA4AB',
        },
        accent: '#ABFB3F',
        dark: {
          100: '#221f3d',
          200: '#0f0d23',
          300: '#6BCB77',
        },
      },
    },
  },
  plugins: [],
}
