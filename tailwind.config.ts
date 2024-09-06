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
       
        foreground: "var(--foreground)",
        primary: '#0077B5',
        secondary: '#000000',
        background: '#F3F2EF',
      },
    },
  },
  plugins: [],
};
export default config;
