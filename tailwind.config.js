/** @type {import('tailwindcss').Config} */

/********************
Guide to customize daisy components: 
https://daisyui.com/theme-generator/

List of all color names: 
https://daisyui.com/docs/colors/
********************/

// const twColors = require("tailwindcss/colors");
const defaultThemeColors = {
  foreground: "#20262B",
  background: "#FFFFFF",
  primary: "#332a7c",
  "primary-focus": "#382e85",
  "primary-content": "#FFFFFF",
  secondary: "#0EAFF4",
  "secondary-focus": "#3CBEF6",
  "secondary-content": "#332a7c",
  // accent: "#AEC7DB",
  "accent-content": "#FFFFFF",
  neutral: "#F5F5F5",
  // "neutral-focus": "#f2f2f2",
  "neutral-content": "#7F90A8",
  // "base-100": "#F8FAFC",
  // "base-200": "#F1F5F9",
  // "base-300": "#EDF4FC",
  "base-content": "#FF0000",
  info: "#0EAFF4",
  "info-content": "#FFFFFF",
  success: "#25E338",
  "success-content": "#FFFFFF",
  warning: "#EBCC2A",
  "warning-content": "#FFFFFF",
  error: "#DF125C",
  "error-content": "#FFFFFF",
  "--range-shdw": "var(--accent,oklch(var(--bc)/1))",
};

const darkThemeColors = {
  primary: "#0EAFF4",
  secondary: "#0EAFF4",
  "secondary-focus": "#3CBEF6",
  "secondary-content": "#332a7c",
  tertiary: "#7d7f8c",
  // accent: "#444A66",
  "accent-content": "#ffffff",
  neutral: "#353951",
  // "neutral-focus": "#ff0000",
  "neutral-content": "#AEC7DB",
  // "base-100": "#1d1a28",
  // "base-200": "#444A66",
  // "base-300": "#222131",
  info: "#0EAFF4",
  "info-content": "#FFFFFF",
  success: "#25E338",
  "success-content": "#FFFFFF",
  warning: "#EBCC2A",
  "warning-content": "#FFFFFF",
  error: "#DF125C",
  "error-content": "#FFFFFF",
  "--range-shdw": "var(--accent,oklch(var(--bc)/1))",
};

const blueThemeColors = {
  primary: "#332a7c",
  "primary-focus": "#382e85",
  "primary-content": "#FFFFFF",
  secondary: "#0EAFF4",
  "secondary-focus": "#3CBEF6",
  "secondary-content": "#332a7c",
};
const orangeThemeColors = {
  primary: "#EB9B22",
  secondary: "#FFD18C",
};

const violetThemeColors = {
  primary: "#611BBD",
  secondary: "#BD90F8",
};

const greenThemeColors = {
  primary: "#0F7819",
  secondary: "#64B66C",
};
const yellowThemeColors = {
  primary: "#FFC700",
  secondary: "#F3C623",
};
const redThemeColors = {
  primary: "#BF0A0A",
  secondary: "#F68C8C",
};

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{html,php}",
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
  ],
  
  theme: {
    extend: {
      colors: {
        // ***** CRTV custom colors ***** //
        background: "hsl(var(--color-background) / <alpha-value>)",
        foreground: "hsl(var(--color-foreground) / <alpha-value>)",

        tertiary: "hsl(var(--color-tertiary) / <alpha-value>)",
        "tertiary-content":
          "hsl(var(--color-tertiary-content) / <alpha-value>)",

        "btn-tertiary": "hsl(var(--color-btn-tertiary) / <alpha-value>)",
        "btn-tertiary-foreground":
          "hsl(var(--color-btn-tertiary-foreground) / <alpha-value>)",
        "btn-tertiary-hover":
          "hsl(var(--color-btn-tertiary-hover) / <alpha-value>)",

        accent: "hsl(var(--color-accent) / <alpha-value>)",
        "accent-foreground":
          "hsl(var(--color-accent-foreground) / <alpha-value>)",

        // "neutral-focus": lightThemeColors["neutral-focus"],
        "neutral-focus": "hsl(var(--color-neutral-focus) / <alpha-value>)",
        "base-100": "hsl(var(--color-base-100) / <alpha-value>)",
        "base-200": "hsl(var(--color-base-200) / <alpha-value>)",
        "base-300": "hsl(var(--color-base-300) / <alpha-value>)",
        "base-400": "hsl(var(--color-base-400) / <alpha-value>)",
        "base-500": "hsl(var(--color-base-500) / <alpha-value>)",

        "input-border": "hsl(var(--color-input-border) / <alpha-value>)",
        input: "hsl(var(--color-input) / <alpha-value>)",
        input: "hsl(var(--color-input) / <alpha-value>)",

        header: "hsl(var(--color-header) / <alpha-value>)",
        "header-foreground":
          "hsl(var(--color-header-foreground) / <alpha-value>)",

        card: "hsl(var(--color-card) / <alpha-value>)",
        "card-foreground": "hsl(var(--color-card) / <alpha-value>)",

        sidebar: "hsl(var(--color-sidebar) / <alpha-value>)",

        dropdown: "hsl(var(--color-dropdown) / <alpha-value>)",
        "dropdown-foreground":
          "hsl(var(--color-dropdown-foreground) / <alpha-value>)",

        modal: "hsl(var(--color-modal) / <alpha-value>)",
        "modal-foreground":
          "hsl(var(--color-modal-foreground) / <alpha-value>)",

        "side-tab-foreground":
          "hsl(var(--color-side-tab-foreground) / <alpha-value>)",

        thead: "hsl(var(--color-thead) / <alpha-value>)",
        "tab-boxed": "hsl(var(--color-tab-boxed) / <alpha-value>)",
        "tab-boxed-active":
          "hsl(var(--color-tab-boxed-active) / <alpha-value>)",

        black: "hsl(0, 2%, 10%)",
        "light-purple": "hsl(241, 25%, 68%)",
        "light-gray": "hsl(0, 0%, 63%);",
        violet: "hsl(288, 83%, 54%)",
        dark: {
          bg: {
            1: "hsl(230, 24%, 20%)", // used in desktop sidebar
            2: "hsl(244, 19%, 16%)", // used in body bg
            3: "hsl(252, 22%, 13%)", // used in main bg
            4: "hsl(230, 24%, 20%)", // used in btn-tertiary bg
            5: "hsl(231, 19%, 27%)", // used in bg of btn-ghost
            6: "hsl(243, 21%, 21%)", // used in bg of input:focus
            "4-hover": "hsl(228, 24%, 25%)",
          },
          "light-gray": "hsl(229, 20%, 33%)",
          "light-blue-highlight": "hsl(231, 21%, 26%)",
        },
      },
      fontFamily: {
        primary: "var(--font-primary)",
        secondary: "var(--font-secondary)",
        tertiary: "var(--font-tertiary)",

        "figtree-bold": ["Figtree-Bold", "sans-serif"],
        "inter-extrabold": ["Inter-Extrabold", "sans-serif"],
        "mulish-extrabold": ["Mulish-ExtraBold", "sans-serif"],
        "nunito-regular": ["Nunito-Regular", "sans-serif"],
        "nunito-bold": ["Nunito-Bold", "sans-serif"],
        "opensans-regular": ["OpenSans-Regular", "sans-serif"],
        "opensans-medium": ["OpenSans-Medium", "sans-serif"],
        "quicksand-medium": ["Quicksand-Medium", "sans-serif"],
        "quicksand-bold": ["Quicksand-Bold", "sans-serif"],
        "raleway-medium": ["Raleway-Medium", "sans-serif"],
        "raleway-bold": ["Raleway-Bold", "sans-serif"],
        "rota-medium": ["Rota-Medium", "sans-serif"],
        "rota-bold": ["Rota-Bold", "sans-serif"],
        "rota-extrabold": ["Rota-ExtraBold", "sans-serif"],
        "segoe-ui-bold": ["Segoe-UI-Bold", "sans-serif"],
        "oswald-medium": ["Oswald-Medium", "sans-serif"],
        "source-sans-medium": ["Source-Sans-Medium", "sans-serif"],
        "source-sans-light": ["Source-Sans-Light", "sans-serif"],
      },
      fontSize: {
        "2xs": "0.625rem",
        "3xs": "0.5rem",
      },
      dropShadow: {
        "btn-2": "3px 9px 35px hsla(0, 0%, 0%, 0.18)",
        main: "0px 17px 34px hsla(0, 0%, 0%, 0.05)",
        dark: {
          main: "0px 10px 24px hsla(0, 0%, 0%, 0.49)",
        },
      },
      boxShadow: {
        btn: "0px 23px 32px 0px hsla(242, 55%, 34%, 0.10)",
        "btn-2": "3px 9px 35px hsla(0, 0%, 0%, 0.18)",
        main: "0px 17px 34px hsla(0, 0%, 0%, 0.05)",
        dark: {
          main: "0px 10px 24px hsla(0, 0%, 0%, 0.49)",
        },
      },
      backgroundImage: {
        "dark-dropify-hover":
          "linear-gradient(-45deg, rgb(38, 42, 62) 25%, rgb(53, 57, 81) 25%, rgb(53, 57, 81) 50%, rgb(38, 42, 62) 50%, rgb(38, 42, 62) 75%, rgb(53, 57, 81) 75%, rgb(53, 57, 81))",
        // "checkbox-dark":
        //   "linear-gradient(-45deg, transparent 65%, hsl(var(--in)) 65.99%), linear-gradient(45deg, transparent 75%, hsl(var(--in)) 75.99%), linear-gradient(-45deg, hsl(var(--in)) 40%, transparent 40.99%), linear-gradient( 45deg, hsl(var(--in)) 30%, hsl(var(--chkfg)) 30.99%, hsl(var(--chkfg)) 40%, transparent 40.99% ), linear-gradient(-45deg, hsl(var(--chkfg)) 50%, hsl(var(--in)) 50.99%)",
      },
    },
  },
  darkMode: ["class", '[data-theme="dark"]'],
  plugins: [require("daisyui")],
  daisyui: {
    prefix: "ds-",
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          ...darkThemeColors,
        },
        blue: {
          ...require("daisyui/src/theming/themes")["blue"],
          ...defaultThemeColors,
          ...blueThemeColors,
          "--range-shdw": "var(--accent,oklch(var(--bc)/1))",
        },
        orange: {
          ...defaultThemeColors,
          ...orangeThemeColors,
        },
        violet: {
          ...defaultThemeColors,
          ...violetThemeColors,
        },
        green: {
          ...defaultThemeColors,
          ...greenThemeColors,
        },
        yellow: {
          ...defaultThemeColors,
          ...yellowThemeColors,
        },
        red: {
          ...defaultThemeColors,
          ...redThemeColors,
        },
        // INSERT NEW THEME HERE
      },
    ],
  },
};
