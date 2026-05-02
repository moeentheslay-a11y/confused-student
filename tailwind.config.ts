import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#09090b",
        foreground: "#ffffff",
        brand: { light: "#fef08a", DEFAULT: "#eab308", dark: "#a16207" },
        surface: "#18181b",
      },
    },
  },
  plugins: [],
};
export default config;
