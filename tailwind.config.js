module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'phone-01': "url('https://firebasestorage.googleapis.com/v0/b/tubetest-886c6.appspot.com/o/landing_page%2Fv02_invisble-min.png?alt=media&token=59e742da-b01e-4ca9-9113-9a2d2c0bd552')",
        'phone-02': "url('https://firebasestorage.googleapis.com/v0/b/tubetest-886c6.appspot.com/o/landing_page%2Fv03-invisble-min.png?alt=media&token=c46a0019-40fa-4605-895a-55785a357620')",
      },
    },
    fontFamily: {
      'lexend-tera': ['"Lexend Tera"', 'sans-serif'],
    },
  },
  plugins: [],
}
