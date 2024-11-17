import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enable dark mode but based on a "dark" class
  theme: {
    container: {
      center: true,
      padding: "20px",
      screens: {
        "2xl": "1300px",
      },
    },
    extend: {
      colors: {
        primary: "#007BA5",
        secondary: "#54A7C3",
        base: "#5C5C5C",
      },
    },
  },
  plugins: [],
};

export default config;

