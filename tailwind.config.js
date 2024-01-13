/** @type {import('tailwindcss').Config} */
// This line is a JSDoc comment that specifies the type of the exported object. It helps with autocompletion and type checking in some editors.

module.exports = {
  // The "content" property tells Tailwind where your classes are being used. This is necessary for removing unused styles in production.
  content: ["./src/**/*.{js,jsx}"],

  // The "mode" property sets the mode to "jit" (Just-In-Time), which compiles your CSS on-demand as you author your templates instead of generating all possible combinations upfront.
  mode: "jit",

  theme: {
    extend: {
      // The "colors" property allows you to add new colors or extend existing ones.
      colors: {
        primary: "#0C0C0B",
        secondary: "#E0E0E0",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },

      // The "boxShadow" property allows you to add new box shadow utilities or extend existing ones.
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },

      // The "screens" property allows you to add new breakpoints or extend existing ones.
      screens: {
        xs: "450px",
      },

      // The "backgroundImage" property allows you to add new background image utilities or extend existing ones.
      backgroundImage: {
        "hero-pattern": "url('/src/assets/matteBlack.jpg')",
      },
    },
  },
  // The "plugins" property allows you to add Tailwind CSS plugins to your configuration.
  plugins: [],
};