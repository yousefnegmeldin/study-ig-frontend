import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui:{
    themes:["light","dark","garden","black"],
  },
  plugins: [require('daisyui')],
  theme: {
    extend: {
      colors: {
        brand: '#0066ff',
      },
    },
  },
};
export default config;
