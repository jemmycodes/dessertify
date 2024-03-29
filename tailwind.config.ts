import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#ed7c12",
      },
      gridTemplateColumns: {
        "main-layout": "85px 1fr",
        "menu-cards-layout": "repeat(auto-fill, minmax(300px, 1fr))",
      },
      gridTemplateRows: {
        "sm-main-layout": "60px 1fr",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
