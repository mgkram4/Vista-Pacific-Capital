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
        'indigo-dye': '#113E59',
        'light-sea-green': '#11B5B2',
        'indigo-dye-2': '#1E5470',
        'prussian-blue': '#082F4A',
        'white': '#FFFFFF',
      }
    }
  },
  plugins: [],
};
export default config;
