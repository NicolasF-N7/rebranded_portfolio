import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#233D4D',
        'charcoal': '#233D4D',
        'charcoal-hue': {
          '100': '#132D3D'
        },
        'pumpkin': '#FE7F2D',
        'sunglow': '#FCCA46',
        'olivine': '#A1C181',
        'zomp': '#619B8A',

        'charcoal-rgb': '35, 61, 77',
        'zomp-rgb': '97, 155, 138',

        'softSunglow': '#fff9cb',
        'softOlivine': '#A1C18161',
        'softZomp': '#619B8A61',

        'sunglowBgSection': '#fde18a',
      }
    },
  },
  plugins: [],
};
export default config;
