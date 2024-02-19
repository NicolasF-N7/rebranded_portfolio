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
        bg: '#FCCA46',
        'charcoal': '#233D4D',
        'charcoal-hue': {
          '100': '#132D3D'
        },
        'pumpkin': '#FE7F2D',
        'deepPumpkin': '#f76201',
        'sunglow': '#FCCA46',
        'olivine': '#A1C181',
        'zomp': '#619B8A',

        'menu-bg': '#fbbc14',
        'project-slide-bg': '#fff6e0',

        'charcoal-rgb': '35, 61, 77',
        'zomp-rgb': '97, 155, 138',

        'softSunglow': '#fff9cb',
        'curvedBackground': '#f2b004',
        'softOlivine': '#A1C18161',
        'softZomp': '#619B8A61',

        'sunglowBgSection': '#fde18a',
      }
    },
  },
  plugins: [],
};
export default config;
