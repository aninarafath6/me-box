module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          light: "#616161",
          DEFAULT: "#343434",
        },
      },
      borderColor: {
        DEFAULT: "#202020",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
